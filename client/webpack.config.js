const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const { EsbuildPlugin } = require("esbuild-loader");
const TerserPlugin = require("terser-webpack-plugin");

const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const chalk = require("chalk");

const DotEnv = require("dotenv-webpack");

module.exports = {
  entry: "./index.js",
  mode: process.env.NODE_ENV,
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
    modules: [path.join(__dirname, "src"), "node_modules"],
  },
  module: {
    rules: [
      // {
      //   test: /.(js|jsx|ts|tsx)$/,
      //   exclude: /node_modules/,
      //   use: "babel-loader",
      // },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: "esbuild-loader",
        exclude: /node_modules/,
        options: {
          loader: "jsx",
          target: "es2015",
        },
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "build"), // build시 만들어질 폴더 경로
    // filename: "bundle.js", // build시 만들어질 번들 파일명
    filename: "[name].[contenthash].js", // contenthash를 사용해 청크마다 다른 이름을 생성
    publicPath: process.env.NODE_ENV === "development" ? "/" : "/build", // 웹팩의 출력 자산이 웹 서버에서 제공되는 경로를 정의합니다.
    asyncChunks: true, // 비동기 청크의 캐시 효율성을 높이고, 필요할 때만 로드되도록 처리합니다.
  },
  devServer: {
    static: { directory: path.join(__dirname, "public") }, // dev-server 참고할 static파일 주소
    hot: true,
    compress: true, // 문자열 압축 관련여부
    host: "localhost", // dev-server host명
    port: 3000, // dev-server port명
    historyApiFallback: true, // 모든 경로를 index.html로 리디렉션 해줘야한다.
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // idnex.html에 webpack에서 bundle된 파일을 link 해줌
      template: "./public/index.html",
      filename: "index.html",
    }),
    new ProgressBarPlugin({
      format: `${chalk.green("Building")} [:bar] ${chalk.yellow(":percent")} (:elapsed seconds)`,
      clear: false, // 진행 바가 완료되면 터미널을 지우지 않음
    }),
    new DotEnv(),
  ],
  performance: {
    hints: false,
  },
  cache: {
    type: "filesystem",
    buildDependencies: {
      config: [__filename],
    },
  },
  optimization: {
    minimize: true, // 코드 압축 활성화
    runtimeChunk: true,
    removeEmptyChunks: false, // 빈 청크파일을 감시하고 제거합니다
    splitChunks: {
      chunks: "all",
    },
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          // 추가 옵션 설정 가능
        },
        extractComments: false, // LICENSE 파일 생성을 방지
      }),
      new EsbuildPlugin({
        css: true,
      }),
    ],
  },
};

const express = require("express");
const http = require("http");
const cookieParser = require("cookie-parser");

const app = express();
const server = http.createServer(app);
const port = 8000;
const multer = require("multer");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + ".png");
  },
});
const upload = multer({ storage });

app.get("/", (req, res) => {
  res.send("Hello.");
});

server.listen(port, () => {});

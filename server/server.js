const express = require("express");
const http = require("http");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const model = require("./core/index");
const Model = new model();

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

app.get("/admin", async (req, res) => {
  const admin = await Model.excute({
    sql: `SELECT * FROM admin`,
    type: "all",
  });

  res.send(admin);
});

app.get("/admin/:admin_seq/companies", async (req, res) => {
  const { admin_seq } = req.params;

  const companies = await Model.excute({
    sql: `SELECT * FROM admin a INNER JOIN company b ON a.seq = b.admin_seq WHERE a.seq = ${admin_seq}`,
    type: "all",
  });

  res.send(companies);
});

app.post("/login", async (req, res) => {
  const { id = "", pw = "", auto_yn = "N" } = req.body;

  const response = {
    code: "success",
    msg: "",
  };

  for (s of [1]) {
    if (empty(id)) {
      response.code = "fail";
      response.msg = "아이디를 입력해주세요";

      break;
    }

    if (empty(pw)) {
      response.code = "fail";
      response.msg = "비밀번호를 입력해주세요";
      break;
    }

    const admin = await Model.excute({
      sql: `SELECT * FROM admin a WHERE a.id = '${id}' AND a.pw = '${pw}'`,
      type: "row",
    });

    if (empty(admin)) {
      response.code = "fail";
      response.msg = "일치하는 관리자 정보가 없습니다";
      break;
    }

    let max_age = 24 * 60 * 60 * 1000;

    if (auto_yn === "on") {
      max_age = max_age * 7;
    }

    res.cookie("haesol_admin_seq", admin.seq, {
      maxAge: max_age,
      httpOnly: true,
    });
  }

  res.send(response);
});

app.post("/auto_login", async (req, res) => {
  const admin_seq = req.cookies.haesol_admin_seq;

  const response = {
    code: "success",
    msg: "",
    data: {},
  };

  for (s of [1]) {
    if (empty(admin_seq)) {
      response.code = "fail";
    }

    const admin = await Model.excute({
      sql: `SELECT * FROM admin a WHERE a.seq = ${admin_seq}`,
      type: "row",
    });

    response.data = {
      name: admin.name,
      seq: admin.seq,
    };
  }

  res.send(response);
});

server.listen(port, () => {});

function empty(value) {
  if (value === null || value === undefined || value === "") {
    return true;
  }

  if (Array.isArray(value) && value.length === 0) {
    return true;
  }

  if (typeof value === "object" && Object.keys(value).length === 0) {
    return true;
  }

  if (value === 0) {
    return true;
  }

  return false;
}

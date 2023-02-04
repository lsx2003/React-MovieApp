const express = require("express");
const port = 4100;
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const router = require("./router/router");
const bodyParser = require("body-parser");

// 미들웨어 실행
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("tiny"));
app.use("/", router); // router 사용

app.get("/", (req, res) => {
  res.status(200).send("movie-rank-server");
});

app.listen(port, () => {
  console.log(`현재 ${port}번 포트에 가동 중...`);
});

module.exports.app = app;

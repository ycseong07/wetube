const express = require("express"); //import express .. 모든걸 설치 후 require or import하면 됨.
const app = express(); //app변수를 선언해서 express를 실행

const PORT = 4000;

const handleListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
};

const handleHome = (req, res) => {
  console.log(req); // req라는 obj가 나열될거임.
  res.send("hello from home");
};

const handleProfile = (req, res) => {
  res.send("You are on my profile");
};

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const shelterRouter = require("./routes/shelters");
const userRouter = require("./routes/user");
const { startChat } = require("./controller/chat");

const cookieParser = require("cookie-parser");

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = 4000;

app.use(cookieParser());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

//스태프가 이메일을 통해 접속할 경우 사용하는 라우팅(테스트용)
app.get("/staff", function (req, res) {
  res.sendFile(__dirname + "/staff.html");
});

app.use("/shelter", shelterRouter);
app.use("/user", userRouter);

//<events>
//서버에 접속했을때 처음에 전송하는 메세지 : basic-chat
//스태프가 보내는 메세지 :staff-chat
//청소년이 보내는 메세지 : teen-chat
//청소년 접속 : teen-login
//지점 관리자 접속 : staff-login

//데이터 형태 : {message : 내용}?

app.use("/chat", function (req, res) {
  let { shelterId, teenId } = req.body;

  const chat = io.of(`/chat/${shelterId}/${teenId}`);
  chat.on("connection", socket => {
    console.log("chat 시작!");
    startChat(socket, chat, obj);
  });
  res.status(200).send("chatting start!");
  // res.sendFile(__dirname + "/index.html");
});

// app.set("port", port);
server.listen(port, () => {
  console.log(`app is litening in PORT ${port}`);
});

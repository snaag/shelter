const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const shelterRouter = require("./routes/shelters");
const userRouter = require("./routes/user");

const chatRouter = require("./routes/chat");
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
    credentials: true
  })
);
//청소년이 사이트에서 접속했을 경우 사용하는 라우팅
app.get("/teen", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
//스태프가 이메일을 통해 접속할 경우 사용하는 라우팅(테스트용)
app.get("/staff", function (req, res) {
  res.sendFile(__dirname + "/staff.html");
});

app.use("/shelter", shelterRouter);
app.use("/user", userRouter);
app.use("/chat", chatRouter);
//<events>
//서버에 접속했을때 처음에 전송하는 메세지 : basic-chat
//스태프가 보내는 메세지 :staff-chat
//청소년이 보내는 메세지 : teen-chat
//청소년 접속 : teen-login
//지점 관리자 접속 : staff-login

//데이터 형태 : {message : 내용}?

//chat의 스페이스로 요청이 들어왔을때!(스페이스는 지점id?+게스트 특정 정보로 만들어야할까?)

const chat = io.of("/chat");
// 모든 작업은 여기서 진행된다.
chat.on("connection", socket => {
  console.log("chat 시작!");
  startChat(socket, chat);
});

// app.set("port", port);
server.listen(port, () => {
  console.log(`app is litening in PORT ${port}`);
});

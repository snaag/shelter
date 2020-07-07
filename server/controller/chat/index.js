const { chatrooms, staffs, teens, messages } = require("../../models");
const url = require("url");
const nodemailer = require("nodemailer");

module.exports = {
  //socket.emit은 채팅을 전송한 사람에게만 전송
  //chat.emit은 스페이스에 존재하는 모든 사람들에게 전송
  startChat: (socket, chat) => {
    //청소년 로그인 시 이벤트
    socket.on("teen-login", data => {
      console.log("teen님이 입장하셨습니다.");
      //이 시점에 직원에게 링크를 보내준다.(직원의 이메일로!) - nodemailer 모듈 사용.
      sendEmail("받는 사람의 gmail");
      socket.emit("basic-chat", {
        message: "안녕하세요. OOO쉼터입니다. 잠시만 기다려주세요 ",
      }); // 청소년의 화면에 채팅이 뜨드록
    });

    // 직원이 맞는지 확인 후 채팅 시작.(검증은 직원의 이메일로 보냈기 때문에 검증되었다고 일단 가정)
    socket.on("staff-login", data => {
      console.log("staff님이 입장하셨습니다.");
      chat.emit("staff-chat", { message: "채팅이 시작되었습니다." });
    });
    //학생의 채팅
    socket.on("teen-chat", data => {
      //디비에 저장?
      //chatroom - staffid 사용, teenid 사용?
      //senderid : 사용자이름?
      //roomid : chatroom에 생성된 고유 id
      //textContent : 채팅 내용

      //스페이스에 있는 사람들에게 모두 전송해주기.
      chat.emit("teen-chat", { message: data.message });
    });
    socket.on("staff-chat", data => {
      //디비에 저장?
      //chatroom - staffid 사용, teenid 사용?
      //senderid : 사용자이름?
      //roomid : chatroom에 생성된 고유 id
      //textContent : 채팅 내용

      //스페이스에 있는 사람들에게 모두 전송해주기.
      chat.emit("staff-chat", { message: data.message });
    });
    socket.on("disconnect", () => {
      console.log("채팅이 끊겼습니다.");

      chat.emit("basic-chat", {
        message: "채팅이 종료되었습니다.",
      });
    });
  },
  chat: (req, res) => {
    //body로 지점id와 학생의 id를 받아온다.
    let { shelterId, teenId } = req.body;
  },
};

const smtpServerURL = "smtp.gmail.com";
const authUser = "전송하는 사람의 gmail";
const authPass = "이메일 비밀번호";
const fromEmail = "전송하는 사람의 gmail";

function sendEmail(toEmail) {
  let transporter = nodemailer.createTransport({
    host: smtpServerURL, //SMTP 서버 주소

    secure: true, //보안 서버 사용 false로 적용시 port 옵션 추가 필요
    auth: {
      user: authUser, //메일서버 계정
      pass: authPass, //메일서버 비번
    },
  });

  let mailOptions = {
    from: fromEmail, //보내는 사람 주소
    to: toEmail, //받는 사람 주소
    subject: "안녕하세요, 청소년이 채팅을 요청했습니다.",
    html: "<a href='http://localhost:4000/staff'>접속</a>",
  };

  //전송 시작!
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      //에러
      console.log(error);
    }
    //전송 완료
    console.log("Finish sending email : ");
    transporter.close();
  });
}

//클라이언트 쪽 흐름
//사용자가 채팅버튼을 클릭 ->

const { chatRooms, staffs, teens, messages } = require("../../models");
const nodemailer = require("nodemailer");

// 현재 접속한 사람들과 그 스태프의 정보
let members = { teen: "", staff: "", roomid: "" };
module.exports = {
  startChat: (socket, chat, obj) => {
    try {
      //청소년 로그인 시 이벤트
      socket.on("teen-login", data => {
        //요청이 올때 teenid, staffid(email)이 body로 같이 보내지도록!
        console.log("teen님이 입장하셨습니다.");

        staffs
          .findOne({ where: { shelterId: obj.shelterId } })
          .then(user => {
            members.teen = obj.teenId;
            members.staff = user.id;
            // console.log(user.email);
            // sendEmail("user.email");
          })
          .then(() => {
            //해당 정보들로 room생성
            chatRooms
              .findOrCreate({
                where: { staffId: members.staff, teenId: members.teen },
                defaults: { staffId: members.staff, teenId: members.teen },
              })
              .then(([room, created]) => {
                members.roomid = room.id;
              });
          });

        //직원에게 링크를 보내준다.(직원의 이메일로!) - nodemailer 모듈 사용.

        socket.emit("basic-chat", {
          message:
            "안녕하세요. OOO쉼터입니다. 직원과 연결될때까지 잠시만 기다려주세요 ",
        }); // 청소년의 화면에 채팅이 뜨드록
      });

      // 직원이 맞는지 확인 후 채팅 시작.(검증은 직원의 이메일로 보냈기 때문에 검증되었다고 일단 가정)
      socket.on("staff-login", data => {
        console.log("staff님이 입장하셨습니다.");
        chat.emit("staff-chat", { message: "채팅이 시작되었습니다." });
      });

      //학생의 채팅
      socket.on("teen-chat", data => {
        //디비에 저장
        messages.create({
          type: "teen",
          senderId: members.teen,
          roomId: members.roomid,
          textContent: data.message,
        });
        //스페이스에 있는 사람들에게 모두 전송해주기.
        chat.emit("teen-chat", { message: data.message });
      });
      socket.on("staff-chat", data => {
        console.log(typeof members.staff, members.staff);
        //디비에 저장
        messages.create({
          type: "staff",
          senderId: members.staff,
          roomId: members.roomid,
          textContent: data.message,
        });
        //스페이스에 있는 사람들에게 모두 전송해주기.
        chat.emit("staff-chat", { message: data.message });
      });
      socket.on("disconnect", () => {
        console.log("채팅이 끊겼습니다.");

        chat.emit("basic-chat", {
          message: "채팅이 종료되었습니다.",
        });
      });
    } catch (e) {
      console.log(e);
    }
  },
};

const smtpServerURL = "smtp.gmail.com";
const authUser = "seokho9522@gmail.com";
const authPass = "????";
const fromEmail = "seokho9522@gmail.com";

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
    html:
      "<p>채팅에 접속하시려면 <a href='http://localhost:4000/staff'>링크</a>를 눌러주세요.</p>",
  };

  //전송 시작!
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      //에러
      console.log(error);
    }
    //전송 완료
    console.log("Finish sending email");
    transporter.close();
  });
}

//클라이언트 쪽 흐름
//사용자가 채팅버튼을 클릭 ->

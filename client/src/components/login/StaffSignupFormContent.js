import React, { useState } from "react";
import FormInput from "./FormInput";
import Loading from "./Loading";
import * as userApi from "../../api/user.api";
import { emailcheck } from "../../data/emailcheck";

const StaffSignupFormContent = ({ goToSignin }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [tel, setTel] = useState("");
  const [shelterId, setShelterId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      let body = {
        type: "staff",
        email,
        name,
        password,
        tel,
        shelterId,
      };
      if (rePassword !== password) {
        alert("패스워드가 일치 하지 않습니다.");
        return;
      }
      if (Object.values(body).includes("")) {
        alert("미기입 회원 정보가 있습니다.");
        return;
      }
      if (!email.match(emailcheck)) {
        alert("올바른 이메일 주소를 기입해주세요.");
        return;
      }
      setLoading(true);

      const { status } = await userApi.postUser("signup", body);
      if (status) setLoading(false);
      if (status === 201) {
        alert("가입이 완료 되었습니다!");
        goToSignin();
      } else if (status === 401) {
        alert(`${email}은(는) 이미 가입된 계정입니다.`);
      } else alert("죄송합니다. 나중에 다시 시도해주세요");
    } catch (e) {
      alert(e, "죄송합니다. 나중에 다시 시도해주세요");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form-content">
      {loading ? (
        <Loading message="회원가입 중" />
      ) : (
        <>
          <FormInput
            id="이메일"
            inputType="email"
            inputValue={email}
            setInputValue={setEmail}
          />
          <FormInput
            id="이름"
            inputType="text"
            inputValue={name}
            setInputValue={setName}
          />
          <FormInput
            id="비밀번호"
            inputType="password"
            inputValue={password}
            setInputValue={setPassword}
          />
          <FormInput
            id="비밀번호 재입력"
            inputType="password"
            inputValue={rePassword}
            setInputValue={setRePassword}
          />
          <FormInput
            id="전화번호"
            inputType="tel"
            inputValue={tel}
            setInputValue={setTel}
          />
          <FormInput
            id="쉼터ID"
            inputType="text"
            inputValue={shelterId}
            setInputValue={setShelterId}
          />
          <FormInput
            labelVisibility={false}
            id="submit"
            inputType="submit"
            fixedValue="회원가입"
          />
        </>
      )}
    </form>
  );
};

export default StaffSignupFormContent;

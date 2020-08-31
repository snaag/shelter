import React, { useState } from "react";
import FormInput from "./FormInput";
import Loading from "./Loading";
import * as userApi from "../../api/user.api";

const StaffSigninFormContent = ({ setLoginType, changeLogin, goHome }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      let body = {
        type: "staff",
        email,
        password,
      };
      if (Object.values(body).includes("")) {
        alert("미기입 회원 정보가 있습니다.");
        return;
      }
      setLoading(true);
      const { status } = await userApi.postUser("signin", body);
      if (status) setLoading(false);
      if (status === 200) {
        setLoginType("staff");
        changeLogin(true);
        goHome();
      } else if (status === 403) {
        alert("인증정보를 다시 확인 해주세요");
      } else {
        alert("죄송합니다. 나중에 다시 시도해주세요");
      }
    } catch (e) {
      alert("죄송합니다. 나중에 다시 시도해주세요");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signin-form-content">
      {loading ? (
        <Loading message="로그인 중" />
      ) : (
        <>
          <FormInput
            id="이메일"
            inputType="email"
            inputValue={email}
            setInputValue={setEmail}
          />
          <FormInput
            id="비밀번호"
            inputType="password"
            inputValue={password}
            setInputValue={setPassword}
          />
          <FormInput
            labelVisibility={false}
            id="submit"
            inputType="submit"
            fixedValue="로그인"
          />
        </>
      )}
    </form>
  );
};

export default StaffSigninFormContent;

import React, { useState } from "react";
import FormInput from "./FormInput";
import Loading from "./Loading";
import * as userApi from "../../api/user.api";

const TeenSigninFormContent = ({ setLoginType, changeLogin, goHome }) => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      let body = {
        type: "teen",
        name,
        tel,
      };
      if (Object.values(body).includes("")) {
        alert("미기입 회원 정보가 있습니다.");
        return;
      }
      setLoading(true);
      const { status } = await userApi.postUser("signin", body);
      if (status) setLoading(false);
      if (status === 200) {
        setLoginType("teen");
        changeLogin(true);
        goHome();
      } else {
        alert("Please check your input");
      }
    } catch (e) {
      alert("Sorry cannot process your request now");
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
            id="이름"
            inputType="text"
            inputValue={name}
            setInputValue={setName}
          />
          <FormInput
            pattern={true}
            id="전화번호 (000-0000-0000)"
            inputType="tel"
            inputValue={tel}
            setInputValue={setTel}
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

export default TeenSigninFormContent;

import React, { useState } from "react";
import FormInput from "./FormInput";
import Loading from "./Loading";
import * as userApi from "../../api/user.api";

const TeenSignupFormContent = ({ goToSignin }) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [tel, setTel] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      let body = {
        type: "teen",
        name,
        gender,
        birthdate,
        tel,
      };
      if (Object.values(body).includes("")) {
        alert("미기입 회원 정보가 있습니다.");
        return;
      }
      setLoading(true);
      const { status } = await userApi.postUser("signup", body);
      if (status) setLoading(false);
      if (status === 201) {
        alert("가입이 완료 되었습니다!");
        goToSignin();
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
            id="이름"
            inputType="text"
            inputValue={name}
            setInputValue={setName}
          />
          <FormInput
            id="성별"
            inputType="select"
            inputValue={gender}
            setInputValue={setGender}
            options={["M", "F"]}
          />
          <FormInput
            id="생년월일"
            inputType="date"
            inputValue={birthdate}
            setInputValue={setBirthdate}
          />
          <FormInput
            pattern={true}
            id="전화번호"
            inputType="tel"
            inputValue={tel}
            setInputValue={setTel}
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

export default TeenSignupFormContent;

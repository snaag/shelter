import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import FormInput from "./FormInput";
import Loading from "../Loading";

import { userActions } from "../../reducers/user.reducer";

const TeenSignupFormContent = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [tel, setTel] = useState("");
  const fetching = useSelector(state => state.user.fetching);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async e => {
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

    dispatch(userActions.signUp({ body, history }));
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form-content">
      {fetching ? (
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

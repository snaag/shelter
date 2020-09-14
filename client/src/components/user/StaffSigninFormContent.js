import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import FormInput from "./FormInput";
import Loading from "../Loading";
import { userActions } from "../../reducers/user.reducer";

const StaffSigninFormContent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const fetching = useSelector(state => state.user.fetching);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async e => {
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

    dispatch(userActions.signIn({ body, history }));
  };

  return (
    <form onSubmit={handleSubmit} className="signin-form-content">
      {fetching ? (
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

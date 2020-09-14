import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import FormInput from "./FormInput";
import Loading from "../Loading";
import { userActions } from "../../reducers/user.reducer";

const TeenSigninFormContent = () => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const fetching = useSelector(state => state.user.fetching);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async e => {
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

    dispatch(userActions.signIn({ body, history }));
  };

  return (
    <form onSubmit={handleSubmit} className="signin-form-content">
      {fetching ? (
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

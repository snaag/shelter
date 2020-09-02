import React, { useState } from "react";
import TypeSelectionInput from "./TypeSelectionInput";
import StaffSigninFormContent from "./StaffSigninFormContent";
import TeenSigninFormContent from "./TeenSigninFormContent";
import { useHistory } from "react-router-dom";

const SigninForm = () => {
  const [type, setType] = useState("teen");
  const history = useHistory();

  const handleSignupClick = () => {
    history.push("/signup");
  };
  const goHome = () => {
    history.push("/");
  };

  return (
    <div className="signin-form-container">
      <div className="signin-form-header">
        <h1>LOGIN</h1>
      </div>
      <TypeSelectionInput type={type} setType={setType} />
      {type === "teen" ? <TeenSigninFormContent /> : <StaffSigninFormContent />}

      <div className="signin-form-footer">
        <h5>계정이 없으신가요 ?</h5>
        <button onClick={handleSignupClick}>회원가입</button>
        <button onClick={goHome}>홈페이지</button>
      </div>
    </div>
  );
};

export default SigninForm;

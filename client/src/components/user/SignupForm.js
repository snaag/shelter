import React, { useState } from "react";
import TypeSelectionInput from "./TypeSelectionInput";
import StaffSignupFormContent from "./StaffSignupFormContent";
import TeenSignupFormContent from "./TeenSignupFormContent";
import { useHistory } from "react-router-dom";

const SignupForm = () => {
  const [type, setType] = useState("teen");
  const history = useHistory();

  const goToSignin = () => {
    history.push("/signin");
  };
  const goHome = () => {
    history.push("/");
  };

  return (
    <div className="signup-form-container">
      <div className="signup-form-header">
        <h1>SIGNUP</h1>
      </div>
      <TypeSelectionInput type={type} setType={setType} />
      {type === "teen" ? <TeenSignupFormContent /> : <StaffSignupFormContent />}

      <div className="signup-form-footer">
        <h5>이미 계정이 있으신가요?</h5>
        <button onClick={goToSignin}>로그인</button>
        <button onClick={goHome}>홈페이지</button>
      </div>
    </div>
  );
};

export default SignupForm;

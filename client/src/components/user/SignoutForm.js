import React from "react";
import SignoutFormContent from "./SignoutFormContent";
import { useHistory } from "react-router-dom";

const SignoutForm = () => {
  const history = useHistory();
  const goHome = () => {
    history.push("/");
  };

  return (
    <div className="signout-form-container">
      <div className="signout-form-header">
        <h1>SIGNOUT</h1>
      </div>
      <SignoutFormContent />
      <div className="signout-form-footer">
        <button onClick={goHome}>홈페이지 돌아가기</button>
      </div>
    </div>
  );
};

export default SignoutForm;

import React, { useState } from "react";
import TypeSelectionInput from "./TypeSelectionInput";
import StaffSigninFormContent from "./StaffSigninFormContent";
import TeenSigninFormContent from "./TeenSigninFormContent";
import { withRouter } from "react-router";

const SigninForm = ({ history, setLoginType, changeLogin }) => {
  const [type, setType] = useState("teen");

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
      {type === "teen" ? (
        <TeenSigninFormContent
          setLoginType={setLoginType}
          changeLogin={changeLogin}
          goHome={goHome}
        />
      ) : (
        <StaffSigninFormContent
          setLoginType={setLoginType}
          changeLogin={changeLogin}
          goHome={goHome}
        />
      )}

      <div className="signin-form-footer">
        <h5>계정이 없으신가요 ?</h5>
        <button onClick={handleSignupClick}>회원가입</button>
        <button onClick={goHome}>홈페이지</button>
      </div>
    </div>
  );
};

export default withRouter(SigninForm);

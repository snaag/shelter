import React from "react";
import { withRouter } from "react-router";

const Login = props => {
  const clickHandler = val => {
    props.history.push(`/${val}`);
  };

  return (
    <div className="login-container">
      {props.loginStatus ? (
        <button onClick={() => clickHandler("signout")}>로그아웃</button>
      ) : (
        <>
          <button onClick={() => clickHandler("signin")}>로그인</button>
          <button onClick={() => clickHandler("signup")}>회원가입</button>
        </>
      )}
    </div>
  );
};

export default withRouter(Login);

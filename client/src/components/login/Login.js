import React from "react";
import { withRouter } from "react-router";

const Login = props => {
  const clickHandler = val => {
    props.history.push(`/${val}`);
  };

  return (
    <>
      {props.loginStatus ? (
        <div className="fab fab-icon-holder">
          <i
            className="fas fa-user-circle"
            onClick={() => clickHandler("signout")}
          ></i>
        </div>
      ) : (
        <div className="fab fab-icon-holder">
          <i
            className="fas fa-user-circle"
            onClick={() => clickHandler("signin")}
          ></i>
        </div>
      )}
    </>
  );
};

export default withRouter(Login);

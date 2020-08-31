import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { userActions } from "../reducers/user.reducer";
import SigninForm from "../components/login/SigninForm";

const Signin = ({ setLoginType, changeLogin }) => {
  return (
    <div className="signin-container">
      <div className="signin-container-blur">
        <SigninForm setLoginType={setLoginType} changeLogin={changeLogin} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  loginStatus: state.user.loginStatus,
  loginType: state.user.loginType,
});

const mapDispatchToProps = dispatch => {
  return {
    changeLogin: loginStatus => dispatch(userActions.setState({ loginStatus })),
    setLoginType: loginType => dispatch(userActions.setState({ loginType })),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signin));

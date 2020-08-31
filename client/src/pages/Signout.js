import React from "react";
import { connect } from "react-redux";
import { userActions } from "../reducers/user.reducer";
import { withRouter } from "react-router";
import SignoutForm from "../components/login/SignoutForm";

const Signout = ({ changeLogin }) => {
  return (
    <div className="signout-container">
      <div className="signout-container-blur">
        <SignoutForm changeLogin={changeLogin} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  loginStatus: state.user.loginStatus,
});

const mapDispatchToProps = dispatch => {
  return {
    changeLogin: loginStatus => dispatch(userActions.setState({ loginStatus })),
    setLoginType: loginType => dispatch(userActions.setState({ loginType })),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Signout)
);

import React, { Component } from "react";
import { connect } from "react-redux";
import { userActions } from "../reducers/user.reducer";
import { withRouter } from "react-router";
import * as userApi from "../api/user.api";

class Signout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
    };
    this.handleSignout = this.handleSignout.bind(this);
  }

  goHome() {
    this.props.history.push("/");
  }

  async handleSignout() {
    this.setState({ loading: true });
    const { status } = await userApi.postUser("signout");
    this.setState({ loading: false });
    if (this.props.loginType !== "") this.props.setLoginType("");
    if (status === 200) {
      this.props.changeLogin(false);
      this.props.history.push("/");
    } else {
      this.props.changeLogin(false);
      this.setState({ error: true });
    }
  }

  render() {
    return (
      <div className="signout">
        <h1>로그아웃 하시겠습니까?</h1>
        {this.state.loading ? (
          <div className="sign-out-loading-container">
            <h1>로그아웃 중</h1>
            <h1 className="dot1">.</h1>
            <h1 className="dot2">.</h1>
            <h1 className="dot3">.</h1>
          </div>
        ) : (
          <>
            <button onClick={() => this.goHome()}>⟸ 돌아가기</button>
            <button onClick={() => this.handleSignout()}>로그아웃 ⟹</button>
          </>
        )}
        {this.state.error ? <h1>error</h1> : null}
      </div>
    );
  }
}

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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Signout)
);

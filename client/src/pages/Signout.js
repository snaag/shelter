import React, { Component } from "react";
import { connect } from "react-redux";
import { changeUserLoginStatus, setLoginType } from "../actions/index";
import { withRouter } from "react-router";

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
    let status = await fetch(
      "http://ec2-3-128-30-232.us-east-2.compute.amazonaws.com:4000/user/signout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(resp => {
      return resp.status;
    });
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
          <h2>로그아웃 중...</h2>
        ) : (
          <>
            <button onClick={() => this.goHome()}>HOME</button>
            <button onClick={() => this.handleSignout()}>로그아웃</button>
          </>
        )}
        {this.state.error ? <h1>error</h1> : <h1>:)</h1>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginStatus: state.loginReducer.loginStatus,
  loginType: state.loginReducer.loginType,
});

const mapDispatchToProps = dispatch => {
  return {
    changeLogin: status => dispatch(changeUserLoginStatus(status)),
    setLoginType: status => dispatch(setLoginType(status)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Signout)
);

import React, { Component } from "react";
import { connect } from "react-redux";
import { userActions } from "../reducers/user.reducer";
import { withRouter } from "react-router";
import * as userApi from "../api/user.api";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "staff",
      loading: false,
      error: false,
      email: "",
      password: "",
      tel: "",
      name: "",
    };
    this.goHome = this.goHome.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);
    this.handleTypeCheck = this.handleTypeCheck.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleTel = this.handleTel.bind(this);
  }

  componentDidMount() {}

  goHome() {
    this.props.history.push("/");
  }

  handleEmailInput(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handlePasswordInput(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleSignupClick() {
    this.props.history.push("/signup");
  }

  handleName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleTel(e) {
    this.setState({
      tel: e.target.value,
    });
  }

  async handleFormSubmit(e) {
    this.setState({ loading: true });
    e.preventDefault();
    let body = {};
    if (this.state.type === "teen") {
      body.type = this.state.type;
      body.name = this.state.name;
      body.tel = this.state.tel;
    } else {
      body.type = this.state.type;
      body.email = this.state.email;
      body.password = this.state.password;
    }

    const { status } = await userApi.postUser("signin", body);

    this.setState({ loading: false });
    if (status === 200) {
      this.props.setLoginType(this.state.type);
      this.props.changeLogin(true);
      this.props.history.push("/");
    } else {
      this.props.changeLogin(false);
      this.setState({ error: true });
    }
  }

  handleTypeCheck(e) {
    this.setState({
      type: e.target.value,
    });
  }

  render() {
    return (
      <div className="signin-container">
        {this.state.loading ? (
          <div className="loading-container">
            <h1>로그인 중</h1>
            <h1 className="dot1">.</h1>
            <h1 className="dot2">.</h1>
            <h1 className="dot3">.</h1>
          </div>
        ) : (
          <>
            <h1>환영합니다!</h1>
            <form onSubmit={this.handleFormSubmit} className="signin-form">
              <div className="signin-form-item">
                <h4>회원 유형</h4>
                <div className="signin-gender-form-item">
                  <label for="teen">청소년</label>
                  <input
                    className="radio-input"
                    onChange={this.handleTypeCheck}
                    type="radio"
                    id="teen"
                    name="sex"
                    value="teen"
                  />
                  <label for="staff">관리자</label>
                  <input
                    className="radio-input"
                    onChange={this.handleTypeCheck}
                    type="radio"
                    id="staff"
                    name="sex"
                    value="staff"
                  />
                </div>
              </div>
              <div className="signin-form-item">
                <label>
                  <h4>{this.state.type === "teen" ? "Name" : "E-mail"}</h4>
                  <input
                    className="text-input"
                    onChange={
                      this.state.type === "teen"
                        ? this.handleName
                        : this.handleEmailInput
                    }
                    value={
                      this.state.type === "teen"
                        ? this.state.name
                        : this.state.email
                    }
                    type={this.state.type === "teen" ? "name" : "email"}
                    name={this.state.type === "teen" ? "name" : "email"}
                  />
                </label>
              </div>

              <div className="signin-form-item">
                <label>
                  <h4>{this.state.type === "teen" ? "Tel" : "Password"}</h4>
                  <input
                    placeholder={
                      this.state.type === "teen"
                        ? "000-000-0000 형식으로 입력해주세요"
                        : null
                    }
                    className="text-input"
                    onChange={
                      this.state.type === "teen"
                        ? this.handleTel
                        : this.handlePasswordInput
                    }
                    type={this.state.type === "teen" ? "birthdate" : "password"}
                    name={this.state.type === "teen" ? "birthdate" : "password"}
                  />
                </label>
              </div>
              <div className="signin-form-item">
                <input className="submit-button" type="submit" value="Submit" />
              </div>
            </form>
            <div className="signin-redirection">
              <h3>계정이 없으신가요 ?</h3>
              <button onClick={this.handleSignupClick}>회원가입</button>
              <button className="home-button" onClick={e => this.goHome(e)}>
                홈페이지
              </button>
            </div>
          </>
        )}
        {this.state.error ? (
          <div className="signin-error-container">
            <h2>이메일과 패스워드를 다시 확인해주세요</h2>
          </div>
        ) : null}
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
    changeLogin: status => dispatch(userActions.changeUserLoginStatus(status)),
    setLoginType: status => dispatch(userActions.setLoginType(status)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signin));

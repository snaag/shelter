import React, { Component } from "react";
import TeenSignupForm from "../components/signup/TeenSignupForm";
import StaffSignupForm from "../components/signup/StaffSignupForm";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picked: "",
    };
    this.goHome = this.goHome.bind(this);
    this.handleTypeClick = this.handleTypeClick.bind(this);
    this.changePick = this.changePick.bind(this);
  }
  goHome() {
    this.props.history.push("/");
  }

  changePick() {
    this.setState({
      picked: "",
    });
  }

  handleTypeClick(e) {
    this.setState({
      picked: e.target.value,
    });
  }

  render() {
    return (
      <div className="signup">
        <h1>환영합니다!</h1>
        <h1>회원 유형을 선택해 주세요</h1>
        {this.state.picked === "" ? (
          <div className="type-button-container">
            <button
              className="type-button"
              onClick={this.handleTypeClick}
              value="teen"
            >
              청소년
            </button>
            <button
              className="type-button"
              onClick={this.handleTypeClick}
              value="staff"
            >
              관리자
            </button>
          </div>
        ) : null}

        {this.state.picked === "teen" ? (
          <>
            <h2>청소년 가입</h2>
            <TeenSignupForm changePick={this.changePick} />
          </>
        ) : this.state.picked === "staff" ? (
          <>
            <h2>관리자 가입</h2>
            <StaffSignupForm changePick={this.changePick} />
          </>
        ) : null}
        <button className="home-button" onClick={() => this.goHome()}>
          홈페이지
        </button>
      </div>
    );
  }
}

export default Signup;

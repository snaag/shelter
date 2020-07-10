import React, { Component } from "react";
import { withRouter } from "react-router";

class StaffSignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "staff",
      email: null,
      name: null,
      password: null,
      rePassword: null,
      tel: null,
      shelterId: 0,
    };
    this.handleGoBack = this.handleGoBack.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleGoBack() {
    this.props.changePick();
    this.props.history.push("/signup");
  }

  async handleSubmit(e) {
    e.preventDefault();
    let { rePassword, password } = this.state;
    if (Object.values(this.state).includes(null)) {
      alert("missing info!");
      return;
    }
    if (rePassword !== password) {
      alert("Please re-check your password!");
      return;
    }

    let status = await fetch(
      "http://ec2-3-128-30-232.us-east-2.compute.amazonaws.com:4000/user/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...this.state,
        }),
      }
    ).then(resp => {
      return resp.status;
    });
    if (status === 201) {
      alert("가입이 완료 되었습니다!");
      this.props.history.push("/");
    } else if (status === 401) alert("user already exists");
    else alert("Please try again!");
  }

  handleInput(e) {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState({ ...this.state, ...newState });
  }

  render() {
    return (
      <>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <div className="signup-form-item">
            <label>
              <h4>Type</h4>
              <input
                className="text-input"
                onChange={this.handleInput}
                type="text"
                name="type"
                value="Staff"
                readOnly
              />
            </label>
          </div>
          <div className="signup-form-item">
            <label>
              <h4>Email</h4>
              <input
                className="text-input"
                onChange={this.handleInput}
                type="email"
                name="email"
              />
            </label>
          </div>
          <div className="signup-form-item">
            <label>
              <h4>Name</h4>
              <input
                className="text-input"
                onChange={this.handleInput}
                type="text"
                name="name"
              />
            </label>
          </div>
          <div className="signup-form-item">
            <label>
              <h4>Password</h4>
              <input
                className="text-input"
                onChange={this.handleInput}
                type="password"
                name="password"
              />
            </label>
          </div>
          <div className="signup-form-item">
            <label>
              <h4>Check Password</h4>
              <input
                className="text-input"
                onChange={this.handleInput}
                type="password"
                name="rePassword"
              />
            </label>
          </div>
          <div className="signup-form-item">
            <label>
              <h4>Tel</h4>
              <input
                className="text-input"
                placeholder="000-000-0000 형식으로 입력해주세요!"
                onChange={this.handleInput}
                type="tel"
                name="tel"
              />
            </label>
          </div>
          <div className="signup-form-item">
            <label>
              <h4>Shelter ID</h4>
              <input
                className="text-input"
                onChange={this.handleInput}
                type="number"
                name="shelterId"
                min="0"
              />
            </label>
          </div>
          <div className="signup-form-item">
            <input className="submit-button" type="submit" value="Submit" />
          </div>
        </form>
        <button className="back-button" onClick={this.handleGoBack}>
          ⟸ 뒤로 돌아가기
        </button>
      </>
    );
  }
}

export default withRouter(StaffSignupForm);

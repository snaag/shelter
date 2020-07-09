import React, { Component } from "react";
import { withRouter } from "react-router";

class TeenSignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "teen",
      name: null,
      sex: null,
      birthdate: null,
      tel: null,
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
    if (Object.values(this.state).includes(null)) {
      alert("missing info!");
      return;
    }
    await fetch(
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
    );
    //TODO :  teen api 만들기;
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
          <label>
            <h4>Type</h4>
            <input
              className="text-input"
              onChange={this.handleInput}
              type="text"
              name="type"
              value="Teen"
              readOnly
            />
          </label>
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
              <h4>Birthdate</h4>
              <input
                className="text-input"
                onChange={this.handleInput}
                type="date"
                name="birthdate"
              />
            </label>
          </div>
          <div className="signup-form-item">
            <h4>Gender</h4>
            <div className="gender-form-item">
              <label for="male">M</label>
              <input
                className="radio-input"
                onChange={this.handleInput}
                type="radio"
                id="male"
                name="sex"
                value="male"
              />
              <label for="female">F</label>
              <input
                className="radio-input"
                onChange={this.handleInput}
                type="radio"
                id="female"
                name="sex"
                value="female"
              />
            </div>
          </div>
          <div className="signup-form-item">
            <label>
              <h4>Tel</h4>
              <input
                className="text-input"
                onChange={this.handleInput}
                type="tel"
                name="tel"
                placeholder="000-000-0000 형식으로 입력해주세요!"
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

export default withRouter(TeenSignupForm);

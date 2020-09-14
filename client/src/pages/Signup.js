import React from "react";
import SignupForm from "../components/user/SignupForm";

const Signup = ({ history }) => {
  return (
    <div className="signup-container">
      <div className="signup-container-blur">
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;

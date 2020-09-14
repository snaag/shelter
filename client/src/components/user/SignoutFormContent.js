import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import FormInput from "./FormInput";
import Loading from "../Loading";
import { userActions } from "../../reducers/user.reducer";

const SignoutFormContent = ({ changeLogin, goHome }) => {
  const fetching = useSelector(state => state.user.fetching);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(userActions.signOut(history));
  };

  return (
    <form onSubmit={handleSubmit} className="signout-form-content">
      {fetching ? (
        <Loading message="로그아웃 중" />
      ) : (
        <FormInput
          labelVisibility={false}
          id="submit"
          inputType="submit"
          fixedValue="로그아웃"
        />
      )}
    </form>
  );
};

export default SignoutFormContent;

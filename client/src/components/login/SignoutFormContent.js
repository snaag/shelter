import React, { useState } from "react";
import FormInput from "./FormInput";
import Loading from "./Loading";
import * as userApi from "../../api/user.api";

const SignoutFormContent = ({ changeLogin, goHome }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      setLoading(true);
      const { status } = await userApi.postUser("signout");
      if (status) setLoading(false);
      if (status === 200 || status === 400) {
        changeLogin(false);
        goHome();
      } else alert("죄송합니다. 나중에 다시 시도해주세요");
    } catch (e) {
      alert(e, "죄송합니다. 나중에 다시 시도해주세요");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signout-form-content">
      {loading ? (
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

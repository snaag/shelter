import { connect } from "react-redux";
import Login from "../../components/login/Login";
import { userActions } from "../../reducers/user.reducer";

const mapStateToProps = state => ({
  loginStatus: state.user.loginStatus,
});

const mapDispatchToProps = dispatch => {
  return {
    changeLogin: status => dispatch(userActions.changeUserLoginStatus(status)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

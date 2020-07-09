import { connect } from "react-redux";
import Login from "../../components/login/Login";
import { changeUserLoginStatus } from "../../actions/index";

const mapStateToProps = state => ({
  loginStatus: state.loginReducer.loginStatus,
});

const mapDispatchToProps = dispatch => {
  return { changeLogin: status => dispatch(changeUserLoginStatus(status)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

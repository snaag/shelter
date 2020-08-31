import { connect } from "react-redux";
import Login from "../../components/login/Login";
import { userActions } from "../../reducers/user.reducer";

const mapStateToProps = state => ({
  loginStatus: state.user.loginStatus,
});

const mapDispatchToProps = dispatch => {
  return {
    changeLogin: loginStatus => dispatch(userActions.setState({ loginStatus })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

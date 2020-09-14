import { call, put, takeLatest } from "redux-saga/effects";
import { userActions } from "../reducers/user.reducer";
import * as userApi from "../api/user.api";

function* signInSaga(action) {
  const { body, history } = action.payload;
  yield put(userActions.setState({ error: null }));

  try {
    yield put(userActions.startRequest());
    yield call(userApi.postUser, "signin", body);
    yield put(
      userActions.setState({ loginStatus: true, loginType: body.type })
    );
    history.push("/");
  } catch (error) {
    yield put(userActions.setState({ error }));
    if (error.response?.status === 403) alert("인증정보를 다시 확인 해주세요");
    else alert("죄송합니다. 나중에 다시 시도해주세요");
  } finally {
    yield put(userActions.endRequest());
  }
}

function* signOutSaga(action) {
  const history = action.payload;
  yield put(userActions.setState({ error: null }));

  try {
    yield put(userActions.startRequest());
    yield call(userApi.postUser, "signout");
    yield put(userActions.setState({ loginStatus: false, loginType: "" }));
    history.push("/");
  } catch (error) {
    yield put(userActions.setState({ error }));
    if (error.response?.status === 400) {
      alert("잘못된 접근입니다.");
      history.push("/");
    } else alert("죄송합니다. 나중에 다시 시도해주세요");
  } finally {
    yield put(userActions.endRequest());
  }
}

function* singUpSaga(action) {
  const { body, history } = action.payload;
  yield put(userActions.setState({ error: null }));

  try {
    yield put(userActions.startRequest());
    yield call(userApi.postUser, "signup", body);
    alert("가입이 완료 되었습니다!");
    history.push("/signin");
  } catch (error) {
    yield put(userActions.setState({ error }));
    if (error.response?.status === 401)
      alert(`${body.email}은(는) 이미 가입된 계정입니다.`);
    else alert("죄송합니다. 나중에 다시 시도해주세요");
  } finally {
    yield put(userActions.endRequest());
  }
}

export default function* userSaga() {
  yield takeLatest(userActions.signIn, signInSaga);
  yield takeLatest(userActions.signOut, signOutSaga);
  yield takeLatest(userActions.signUp, singUpSaga);
}

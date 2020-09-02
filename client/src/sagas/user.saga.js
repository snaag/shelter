import { call, put, takeLatest } from "redux-saga/effects";
import { userActions } from "../reducers/user.reducer";
import * as userApi from "../api/user.api";

function* signInSaga(action) {
  const { body, history } = action.payload;
  yield put(userActions.setState({ error: null }));

  try {
    yield put(userActions.startRequest());
    yield call(userApi.postUser, "signin", body);
    yield put(userActions.setState({ loginType: body.type }));
    yield put(userActions.setState({ loginStatus: true }));
    history.push("/");
  } catch (error) {
    yield put(userActions.setState({ error }));
    if (error.response?.status === 403) alert("인증정보를 다시 확인 해주세요");
    else alert("죄송합니다. 나중에 다시 시도해주세요");
  } finally {
    yield put(userActions.endRequest());
  }
}

export default function* userSaga() {
  yield takeLatest(userActions.signIn, signInSaga);
}

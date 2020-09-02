import { all } from "redux-saga/effects";
import filterSaga from "./filter.saga";
import userSaga from "./user.saga";

export default function* rootSaga() {
  yield all([filterSaga(), userSaga()]);
}

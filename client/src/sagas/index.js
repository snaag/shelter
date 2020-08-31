import { all } from "redux-saga/effects";
import filterSaga from "./filter.saga";

export default function* rootSaga() {
  yield all([filterSaga()]);
}

import { call, put, select, takeLatest } from "redux-saga/effects";
import * as filterApi from "../api/filter.api";
import { filterActions } from "../reducers/filter.reducer";
import { getParams } from "./selectors";

function* getSheltersSaga() {
  yield put(filterActions.setState({ error: null }));

  try {
    yield put(filterActions.startRequest());
    const params = yield select(getParams);
    const {
      data: { shelters },
    } = yield call(filterApi.getShelters, params);
    yield put(filterActions.setState({ shelters }));
  } catch (error) {
    yield put(filterActions.setState({ error }));
  } finally {
    yield put(filterActions.endRequest());
  }
}

export default function* filterSaga() {
  yield takeLatest(filterActions.getShelters, getSheltersSaga);
}

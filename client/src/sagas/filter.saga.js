import { call, put, select, takeLatest } from "redux-saga/effects";
import * as filterApi from "../api/filter.api";
import { filterActions } from "../reducers/filter.reducer";
import { mapActions } from "../reducers/map.reducer";
import { fabActions } from "../reducers/fab.reducer";
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

    const isMenuActive = yield select(state => state.fab.isMenuActive);
    if (!isMenuActive) yield put(fabActions.setState({ isMenuActive: true }));

    const { showCurrentPosition } = yield select(state => state.map);
    if (showCurrentPosition)
      yield put(mapActions.setState({ showCurrentPosition: false }));
  } catch (error) {
    yield put(filterActions.setState({ error }));
  } finally {
    yield put(filterActions.endRequest());
  }
}

export default function* filterSaga() {
  yield takeLatest(filterActions.getShelters, getSheltersSaga);
}

import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../api";
import {
  FETCH_IMAGE_ERROR,
  FETCH_IMAGE_REQUEST,
  FETCH_IMAGE_SUCCESS,
} from "./actions";

function* fetchImage() {
  try {
    const response = yield call(api.get, "/pokemon/ditto");
    yield put({
      type: FETCH_IMAGE_SUCCESS,
      payload: { image: response.data.sprites.front_default },
    });
  } catch (e) {
    yield put({ type: FETCH_IMAGE_ERROR, message: e.message });
  }
}

function* mySaga() {
  yield takeLatest(FETCH_IMAGE_REQUEST, fetchImage);
}

export default mySaga;

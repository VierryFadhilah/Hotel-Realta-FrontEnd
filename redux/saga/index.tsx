import { all, takeEvery } from "redux-saga/effects";
import ActionTypes from "../action/actionTypes";
import { handleGetDepartment } from "./department";

function* watchAll() {
  yield all([takeEvery(ActionTypes.GET_DEPARTMENT, handleGetDepartment)]);
}

export default watchAll;

import { all, takeEvery } from "redux-saga/effects";
import ActionTypes from "../../action/hr/actionTypes";
import {
  handleCreateDepartment,
  handleDeleteDepartment,
  handleGetDepartment,
} from "./department";

function* watchAll() {
  yield all([
    takeEvery(ActionTypes.GET_DEPARTMENT, handleGetDepartment),
    takeEvery(ActionTypes.CREATE_DEPARTMENT, handleCreateDepartment),
    takeEvery(ActionTypes.DELETE_DEPARTMENT, handleDeleteDepartment),
  ]);
}

export default watchAll;

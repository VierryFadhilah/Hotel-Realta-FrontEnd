import departmentApi from "@/api/hr/departmentApi";
import { call, put } from "redux-saga/effects";
import {
  createDepartmentResponse,
  deleteDepartmentResponse,
  getDepartmentResponse,
} from "../../action/hr/department";

function* handleGetDepartment(action: any): any {
  try {
    const { search, page, entry } = action.payload;
    const result = yield call(departmentApi.getDepartment, search, page, entry);

    yield put(getDepartmentResponse(result.data));
  } catch (error) {
    yield put(getDepartmentResponse({ message: error }));
  }
}

function* handleCreateDepartment(action: any): any {
  try {
    const data = action.payload;

    const result = yield call(departmentApi.createDepartment, data);

    yield put(createDepartmentResponse(result.data));
  } catch (error) {
    yield put(createDepartmentResponse({ message: error }));
  }
}

function* handleDeleteDepartment(action: any): any {
  try {
    const id = action.payload;

    const result = yield call(departmentApi.deleteDepartment, id);

    yield put(deleteDepartmentResponse(result.data));
  } catch (error) {
    yield put(deleteDepartmentResponse({ message: error }));
  }
}

export { handleGetDepartment, handleCreateDepartment, handleDeleteDepartment };

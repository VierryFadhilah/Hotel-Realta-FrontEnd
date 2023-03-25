import departmentApi from "@/api/hr/departmentApi";
import { call, put } from "redux-saga/effects";
import { getDepartmentResponse } from "../action/hr/department";

function* handleGetDepartment(action: any): any {
  try {
    const { search, page, entry } = action.payload;
    const result = yield call(departmentApi.getDepartment, search, page, entry);

    yield put(getDepartmentResponse(result.data));
  } catch (error) {
    yield put(getDepartmentResponse({ message: error }));
  }
}

export { handleGetDepartment };

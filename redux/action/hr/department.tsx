import ActionTypes from "./actionTypes";

export const getDepartment = (search: string, page: number, entry: number) => {
  const payload = {
    search,
    page,
    entry,
  };
  return {
    type: ActionTypes.GET_DEPARTMENT,
    payload,
  };
};

export const getDepartmentResponse = (payload: any) => {
  return {
    type: ActionTypes.GET_DEPARTMENT_RESPONSE,
    payload,
  };
};

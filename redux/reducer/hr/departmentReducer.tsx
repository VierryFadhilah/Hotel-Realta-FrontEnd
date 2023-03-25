import ActionTypes from "@/redux/action/hr/actionTypes";

const initialState = {
  data: {},
  statusCode: "200",
  message: "success",
};

export function departmentReducers(state = initialState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.GET_DEPARTMENT_RESPONSE:
      return {
        data: payload.data,
        statusCode: payload.statusCode,
        message: payload.message,
      };
    default:
      return state;
  }
}

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, Middleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { departmentReducers } from "../reducer/hr/departmentReducer";

import { createLogger } from "redux-logger";
import rootSaga from "../saga";

const logger = createLogger();
const saga = createSagaMiddleware();

const reducer = combineReducers({
  departmentReducers,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(logger)
      .concat(saga),
});

saga.run(rootSaga);

export default store;

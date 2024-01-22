import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import sagas from "./sagas";
import reducer from "./reducer";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

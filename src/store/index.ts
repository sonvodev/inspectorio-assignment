import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./store.sagas";
import rootReducers from "./store.reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const bootstrapStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default bootstrapStore();

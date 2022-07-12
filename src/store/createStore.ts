/ eslint-disable no-underscore-dangle /;
import { applyMiddleware, compose, createStore as _createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?? compose;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const createStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = _createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);

  return store;
};

export default createStore;

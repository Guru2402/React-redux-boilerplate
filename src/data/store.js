import { combineReducers, createStore, applyMiddleware } from "redux";
import Thunk from "redux-thunk";

import { SampleReducer } from "./reducers";

const reducers = combineReducers({
  SampleState: SampleReducer
});

const store = createStore(reducers, applyMiddleware(Thunk));

export default store;

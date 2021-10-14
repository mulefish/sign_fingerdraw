import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import Reducer from "../components/signature/redux/reducers.js";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const rootReducer = combineReducers({
  Reducer,
});
// export default rootReducer;
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;

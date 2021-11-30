import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";

// const store = createStore(
//   reducer,
//   composeWithDevTools(applyMiddleware(logger))
// );

const makeStore = (context) =>
  createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper(makeStore);

// import { legacy_createStore as createStore } from "redux";
// import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
// // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import rootreducers from "./Components/redux/reducers/main";

// const store = createStore(
//   rootreducers,
//   composeWithDevTools(applyMiddleware(...middleware))
//   //   composeEnhancers(applyMiddleware(thunk))
// );

// export default store;
import { createStore, applyMiddleware } from "redux";
const middleware = [thunk];
const store = createStore(rootreducers, applyMiddleware(...middleware));
export default store;

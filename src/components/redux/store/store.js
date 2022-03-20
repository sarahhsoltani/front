import { applyMiddleware, compose, createStore } from "redux";
import foodReducer from "../reducers/foodReducer";
import thunk from "redux-thunk";
const middleWare = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore (
    foodReducer,
    composeEnhancers(applyMiddleware(...middleWare))
);
export default store;
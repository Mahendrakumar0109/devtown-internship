import {legacy_createStore as createStore} from "redux";
import { applyMiddleware } from 'redux';
import reducer from "../Reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const middleware = [thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;
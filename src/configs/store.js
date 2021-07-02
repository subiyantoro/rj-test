import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import rootReducer from "../controllers/reducers";

const middleware = composeWithDevTools(applyMiddleware(promise, thunk));
export default createStore(rootReducer, middleware);

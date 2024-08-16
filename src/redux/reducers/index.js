import { combineReducers } from "redux";

import counter from "./counter";
import { doLogin } from "../actions/userAction";

const allReducers = combineReducers({
    counter,
    doLogin,
    // add more reducers here
});

export default allReducers;

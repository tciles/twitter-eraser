import { combineReducers } from 'redux'

import application from "./application";
import notifications from "./notifications";

export default combineReducers({
    application,
    notifications,
});

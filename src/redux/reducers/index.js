import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import application from "./application";
import notifications from "./notifications";

export default combineReducers({
    application,
    notifications,
    form: formReducer
});

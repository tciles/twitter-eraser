import {SET_ROWS, SET_STEP, RESET_STEP, UPDATE_CONFIGURATION_FORM} from "../actions/application";

const INITIAL_STATE = {
    version: "0.0.1-beta",
    activeStep: 0,
    rows: [],
    consumerKey: "",
    consumerSecret: "",
    accessTokenKey: "",
    accessTokenSecret: "",
}

const application = (state = INITIAL_STATE, action)  => {
    switch (action.type) {
        case UPDATE_CONFIGURATION_FORM:
            return {
                ...state,
                ...action.payload
            }
        case SET_ROWS:
            return {
                ...state,
                rows: action.payload
            }
        case SET_STEP:
            return {
                ...state,
                activeStep: action.payload
            }
        case RESET_STEP:
            return {
                ...state,
                activeStep: 0,
                rows: []
            }
        default:
            return state;
    }
}

export default application;

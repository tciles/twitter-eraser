import {SET_ROWS, SET_STEP, RESET_STEP} from "../actions/application";

const INITIAL_STATE = {
    version: "0.0.1-beta",
    activeStep: 0,
    rows: []
}

const application = (state = INITIAL_STATE, action)  => {
    switch (action.type) {
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
                activeStep: 0
            }
        default:
            return state;
    }
}

export default application;

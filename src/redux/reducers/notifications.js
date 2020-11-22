import {ADD_NOTIFICATION, DELETE_NOTIFICATION} from "../actions/notifications";

const INITIAL_STATE = [];

const notifications = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_NOTIFICATION:
            return [...state, action.payload]
        case DELETE_NOTIFICATION:
            return state.filter(notification => notification.id !== action.payload.id);
        default:
            return state;
    }
}

export default notifications;

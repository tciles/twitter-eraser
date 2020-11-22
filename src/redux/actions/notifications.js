import uniqId from "../../utils/uniqId";

export const ADD_NOTIFICATION = "tweet_eraser/ADD_NOTIFICATION";
export const addNotification = (type, text) => ({
    type: ADD_NOTIFICATION,
    payload: { id: uniqId(), type, text }
});

export const DELETE_NOTIFICATION = "tweet_eraser/DELETE_NOTIFICATION";
export const deleteNotification = (id) => ({
    type: DELETE_NOTIFICATION,
    payload: { id }
});

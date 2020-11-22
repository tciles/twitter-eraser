export const SET_STEP = "tweet_eraser/SET_STEP";
export const setStep = (payload) => ({type: SET_STEP, payload});

export const RESET_STEP = "tweet_eraser/RESET_STEP";
export const resetStep = () => ({type: RESET_STEP});

export const SET_ROWS = "tweet_eraser/SET_ROWS";
export const setRows = (payload) => ({type: SET_ROWS, payload});

export const UPDATE_CONFIGURATION_FORM = "tweet_eraser/UPDATE_CONFIGURATION_FORM";
export const updateConfigurationForm = (payload) => ({type: UPDATE_CONFIGURATION_FORM, payload});

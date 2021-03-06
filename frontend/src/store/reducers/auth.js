import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    token: null,
    loading: false,
    loginRedirectURL: "/"
};

const authInit = (state, action) => {
    return updateObject(state, { loading: true });
};

const authLoginSuccess = (state, action) => {
    return updateObject(state, { loading: false, token: action.token });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_LOGIN_INIT:
            return authInit(state, action);
        case actionTypes.AUTH_LOGIN_SUCCESS:
            return authLoginSuccess(state, action);
        default:
            return state;
    }
};

export default reducer;
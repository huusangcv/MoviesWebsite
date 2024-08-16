import { FETCH_USER_LOGIN_SUCCESS } from "../actions/userAction";

const INITIAL_STATE = {
    account: {
        access_token: "",
        refresh_token: "",
        username: "",
    },
    isAuthenticated: false,
};
const useReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_LOGIN_SUCCESS:
            const { access_token, refresh_token, username, image, role } =
                action.payload.DT;
            return {
                ...state,
                account: {
                    access_token,
                    refresh_token,
                    username,
                    image,
                    role,
                },
                isAuthenticated: true,
            };
        default:
            return state;
    }
};

export default useReducer;

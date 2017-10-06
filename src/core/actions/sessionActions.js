import {sessionActionTypes} from './types/sessionActionTypes'

const sessionActions = {
    login : (username, password) =>
    {
        return {
            type: sessionActionTypes.LOGIN_BEGIN,
            user: {
                username,
                password
            }
        }
    },
    logout: () =>
    {
        return {
            type: sessionActionTypes.LOGOUT_BEGIN
        }
    }
};

export default sessionActions;

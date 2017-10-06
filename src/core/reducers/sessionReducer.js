import {sessionActionTypes} from '../actions/types/sessionActionTypes'

const initialState = {
    loggedIn: false,
    shouldRedirect: '',
    errorMessage: null,
    user: {
        birthday: '',
        email: '',
        schoolId: 0,
        genre: '',
        id: 0,
        lastName: '',
        name: '',
        photoRoute: '',
        state: ''
    }
};

export default function sessionReducer(state = initialState, action)
{
    switch (action.type)
    {
        case sessionActionTypes.LOGIN_SUCCESS:
            if (action.loggedInRes == false)
            {
                state = {
                    ...state,
                    loggedIn: action.loggedInRes,
                    shouldRedirect: 'false',
                    errorMessage: 'El nombre de usuario o contraseña no coinciden, por favor intente de nuevo.',
                    user: {
                        birthday: '',
                        email: '',
                        schoolId: 0,
                        genre: '',
                        id: 0,
                        lastName: '',
                        name: '',
                        photoRoute: '',
                        state: ''
                    }
                };
            }
            else
            {
                state = {
                    ...state,
                    loggedIn: true,
                    errorMessage: 'logueado',
                    shouldRedirect: 'true',
                    user: {
                        birthday: action.response.birthday,
                        email: action.response.email,
                        schoolId: action.response.escuelaId,
                        genre: action.response.genre,
                        id: action.response.id,
                        lastName: action.response.lastName,
                        name: action.response.name,
                        photoRoute: action.response.rutaFoto,
                        state: action.response.state
                    }
                };
            }

            break;

        case sessionActionTypes.LOGIN_ERROR:
            state = {
                ...state,
                loggedIn: action.loggedInRes,
                shouldRedirect: 'false',
                errorMessage: 'Los campos usuario y contraseña no pueden ser vacios.',
                user: {
                    birthday: '',
                    email: '',
                    schoolId: 0,
                    genre: '',
                    id: 0,
                    lastName: '',
                    name: '',
                    photoRoute: '',
                    state: ''
                }
            };
            break;
    }

    return state;
}
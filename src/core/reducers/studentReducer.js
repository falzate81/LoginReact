import {studentActionsTypes} from '../actions/types/studentActionsTypes'

const initialState = {
    studentF: {
        studentId: '',
        studentFullName: '',
        autonomyLevel: '',
        studentState: '',
        tutorId: '',
        gradoId: ''
    }
};

export default function profileReducer(state = initialState, action)
{
    switch (action.type)
    {
        case studentActionsTypes.STUDENT_DATA_SUCCESS:

            /*action.userResponse.map(u =>
            {
                if(u.email == action.userEmail)
                {
                    userT = u;
                }
            });

            action.studentResponse.map(e =>
            {
                if(e.id == userT.id)
                {
                    state = {
                        ...state,
                        studentF: {
                            studentId: userT.id,
                            studentFullName: userT.name + ' ' + userT.lastName
                        }
                    }
                }
            });*/

            state = {
                ...state,
                studentF: {
                    studentId: action.studentResponse[0].studentId,
                    studentFullName: action.studentResponse[0].studentFullName,
                    autonomyLevel: action.studentResponse[0].autonomyLevel,
                    studentState: action.studentResponse[0].studentState,
                    tutorId: action.studentResponse[0].tutorId,
                    gradoId: action.studentResponse[0].gradoId
                }
            };

            break;

        case studentActionsTypes.STUDENT_DATA_ERROR:
            break;
    }

    return state;
}
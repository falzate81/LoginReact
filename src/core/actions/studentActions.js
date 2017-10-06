import {studentActionsTypes} from './types/studentActionsTypes'

const studentActions = {
    fetchStudent : (studentUser, token) =>
    {
        return {
            type: studentActionsTypes.STUDENT_DATA_BEGIN,
            payload: {
                studentUser,
                token
            }
        }
    },
};

export default studentActions;

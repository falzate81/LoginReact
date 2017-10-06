import axios from 'axios'
import { UsersService } from './UsersService';


export class StudentsService
{

    /*static getStudents()
    {*/
    static *getStudentByEmail(email)
    {
        // TODO: Logica necesaria
        let userT = '';
        let studentT = [];

        let userResponse = yield UsersService.getUsers();

        userResponse.data.map(u =>
        {

            if(u.email === email)
            {
                userT = u;
            }
        });

        let studentResponse = yield axios.get('http://localhost:3000/api/student');

        studentResponse.data.students.map(e =>
        {
            if(e.id === userT.id)
            {
                studentT.push({studentId: userT.id, studentFullName: userT.name + ' ' + userT.lastName, autonomyLevel: e.autonomyLevel,
                    studentState: e.state, tutorId: e.tutorId, gradoId: e.gradoId})
            }
        });

        // TODO: Agregar logica de obtencion offline
        return studentT;
    }
}
/**
 * Created by lenovo on 23/08/2017.
 */
import axios from 'axios'

export class UsersService
{
    static getUsers()
    {

        return axios.get('http://localhost:3000/api/users');
    }

    static getUserByEmail(email)
    {
        return axios.get('http://localhost:3000/api/users?email=' + email);
    }
}
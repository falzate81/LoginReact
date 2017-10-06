/**
 * Created by lenovo on 19/09/2017.
 */
import axios from 'axios'
import {UsersService} from './UsersService';

export class SessionService
{
    static *getSessionUser(userName, userPass)
    {
        var user = '';

        /*let userResponse = yield UsersService.getUsers();*/
        let userByEmail = yield UsersService.getUserByEmail(userName)

        if(userByEmail.data.length == 0)
        {
            user = '';
        }
        else
        {
            user = userByEmail.data[0];
        }

        return user;
    }
}
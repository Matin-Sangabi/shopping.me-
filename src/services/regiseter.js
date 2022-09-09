import {http} from './httpRequest';

export function signInUsers(data) {
    return http.post("/user/register" , data);
}
import {http } from './httpRequest';

export function loginUsers (data) {
    return http.post('/user/login' , data);
}
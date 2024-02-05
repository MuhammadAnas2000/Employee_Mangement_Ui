import axios from 'axios';
import {AUTH_CONTROLLER} from './ApiEndPoints';
export function loginUser(credentials){
       return axios.post(AUTH_CONTROLLER+"/login",credentials)
}
import axios from 'axios';
import {EMPLOYEE_CONTROLLER} from './ApiEndPoints';
export function fetchEmployees(){
       return axios.get(EMPLOYEE_CONTROLLER)
}
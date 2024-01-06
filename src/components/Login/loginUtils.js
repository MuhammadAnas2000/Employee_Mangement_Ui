import {toast } from "react-toastify";
import {loginUser } from '../../service/authService.js';

export function doLogin(credentials){
    var resp = loginUser(credentials);
    resp
    .then((response) => response.data)
    .then((data) => (data.ok ? notify("You login to your account successfully", "success") : notify("Your password or your email is wrong", "error")));
}
export function validate(){

}
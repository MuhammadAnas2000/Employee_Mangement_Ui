import {loginUser } from '../../service/authService.js';
import {showSuccessMessage,showErrorMessage} from '../../util/ToastUtils.jsx';
export async function doLogin(credentials) {
    var response = await loginUser(credentials);
    var userData = response.data.response;
    var responseCode = response.data.responseCode;
    try {
        if(userData !=null && responseCode!="0"){
            showSuccessMessage('Login Successful.');
        }else{
            showErrorMessage("Invalid Password or Email.");
        }    
        } catch (error) {
            showErrorMessage("Something Went Wrong"+error);
      }
    return userData;
}
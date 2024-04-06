import { useState, React } from "react";
import './Login.css'
import user_icon from  '../../assets/person.png'
import email_icon from  '../../assets/email.png'
import password_icon from  '../../assets/password.png'
import {doLogin} from './loginUtils.js'
import {useAuth} from '../../context/UserContext.jsx'
import {FaLock } from 'react-icons/fa';
import {useNavigate} from "react-router-dom";
import * as USERS from '../../util/UserConstants.jsx'
export const Login = () => {
  
  const navigate = useNavigate();
  const [credentials, setData] = useState({
    username: "",
    password: "",
  });
  const {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn
  } = useAuth();
  const submitHandler = async(event) =>  {
    event.preventDefault();
    var userData = await doLogin(credentials);
    if(userData!=null){
      setAuthUser(userData);
      setIsLoggedIn(true);
      navigateAfterLogin(userData);
    }
  };
  function onInputChange(event){
    setData({ ...credentials, [event.target.name]: event.target.value });
  }
  function navigateAfterLogin(userData){
    if(userData.userRole ===  USERS.ROLE_EMPLOYEE){
        navigate("/Employee/Home");
    }
    if(userData.userRole ===  USERS.ROLE_ADMIN){
      navigate("/Employee/Home");
  }
}
  return (
    <div className="wrapper-login">
      <div className="container-login">
        <form onSubmit={(e)=>submitHandler(e)}>
          <div className="form-group">
            <div className="header-login">
              <div className="text">Welcome Back <span><FaLock className="icon"/></span></div>
            </div>
            <div className="inputs-login">
                  <div className="input">
                      <img src={email_icon} alt="" />
                      <input name="username" type="text" placeholder="User Name" onChange={(e) => onInputChange(e)}/>
                  </div>
                  <div  className="input">
                      <img src={password_icon} alt=""  />
                      <input name="password" type="password" placeholder="Password" onChange={(e) => onInputChange(e)} />
                  </div>
              </div>
            <button type="submit" className="btn btn-primary login_btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login
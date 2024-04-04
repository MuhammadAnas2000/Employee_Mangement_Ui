import { useState, React } from "react";
import './Login.css'
import user_icon from  '../../assets/person.png'
import email_icon from  '../../assets/email.png'
import password_icon from  '../../assets/password.png'
import { doLogin } from './loginUtils.js'
import { ToastContainer, toast } from "react-toastify";

export const Login = () => {
  
  const [credentials, setData] = useState({
    username: "",
    password: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    doLogin(credentials);
  };

  function onInputChange(event){
    setData({ ...credentials, [event.target.name]: event.target.value });
  }
  return (
    <div className="wrapper-login">
      <div className="container-login">
        <form onSubmit={(e)=>submitHandler(e)}>
          <div className="form-group">
            <div className="header-login">
              <div className="text">Login EMS</div>
              <div className="underline"></div>
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
            <button type="submit" className="btn btn-primary login_btn " >Submit</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}
export default Login
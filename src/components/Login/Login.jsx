import React from 'react';
import './Login.css'
import user_icon from  '../../assets/person.png'
import email_icon from  '../../assets/email.png'
import password_icon from  '../../assets/password.png'

export const Login = () => {
  return (
    <div className="container">
        <div className="header">
            <div className="text">Login EMS</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
             <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder="Email" />
             </div>
             <div  className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder="Passowrd" />
             </div>
        </div>
        <button className="login_btn">Login</button>
    </div>
  )
}
export default Login
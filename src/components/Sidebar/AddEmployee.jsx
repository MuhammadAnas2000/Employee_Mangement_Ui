import { useEffect, useState } from "react";
import "../../components/common/common.css";
import Header from "../../components/Header/Header.jsx";
import NavBar from "../../components/Navbar/NavBar.jsx";
import APPLICATION_ROUTES from "../../components/common/routesUtil.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';

const headings = ["DASHBOARD", "Add Employee", "Leave Report", "Salary Report", "Add Salary"];
function AddEmployee() {
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [cnic, setcnic] = useState("");
  const [age, setage] = useState("");
  const [phone, setphone] = useState("");
  const [email, setEmail] = useState("");
  const [qualification,setqualification] = useState("");
  const [password, setpassword] = useState("");
  const [cnfrmPass, setcnfrmPass] = useState("");
  const [full_name,setfull_name] = useState("");
  const [user_role, setuser_role] = useState("2");

  
  useEffect(() => {
    setfull_name(`${first_name} ${last_name}`);
  }, [first_name, last_name]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "first_name") {
      setfirst_name(value);
    }
    if (id === "last_name") {
      setlast_name(value);
    }
    if (id === "cnic") {
      const filterVal = value.replace(/\D/g,'');
      setcnic(filterVal);
    }
    if (id === "age") {
      setage(value);
    }
    if (id === "phone") {
      const filterVal = value.replace(/[a-zA-Z]/g,'');
      setphone(filterVal);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "qualification") {
      setqualification(value);
    }
    if (id === "password") {
      setpassword(value);
    }
    if (id === "confirmPassword") {
      setcnfrmPass(value);
    }
  };

  const handleSubmit = async () => {
      const userData = {
        first_name,
        last_name,
        cnic,
        age,
        phone,
        email,
        qualification,
        password,
        full_name,
        user_role,
      };

      try {
          const reponse = await fetch("http://localhost:8080/ems/admin/create",{
          method: "POST",
          headers: {
              "Content-Type" : "application/json"
          },
          body: JSON.stringify(userData),
        });
        window.location.reload();
        if(Response.ok){
          console.log("User data sent successfully");
        }
        else{
          console.log("Failed to send user data");
        }

      } catch (error) {
        console.error("Error sending user data:", error);
      }
  };


  return (
    <div>
      <div className="form">
        <h2>Add Employee Details</h2>
        <div className="form-body">
          <div className="username">
            <label className="formLabel" htmlFor="first_name">
              First Name
            </label>
            <input
              className="formInput"
              type="text"
              value={first_name}
              onChange={handleInputChange}
              id="first_name"
              placeholder="First Name"
            />
          </div>

          <div className="lastname">
            <label className="formLabel" htmlFor="last_name">
              Last Name
            </label>
            <input
              className="formInput"
              type="text"
              value={last_name}
              onChange={(e) => handleInputChange(e)}
              id="last_name"
              placeholder="Last Name"
            />
          </div>

          <div className="cnic">
            <label className="formLabel" htmlFor="cnic">
              CNIC
            </label>
            <input
              className="formInput"
              type="text"
              value={cnic}
              onChange={(e) => handleInputChange(e)}
              id="cnic"
              placeholder="Cnic"
            />
          </div>

          <div className="age">
            <label className="formLabel" htmlFor="age">
              Age
            </label>
            <input
              className="formInput"
              type="number"
              value={age}
              onChange={(e) => handleInputChange(e)}
              id="age"
              placeholder="age"
            />
          </div>

          <div className="phone">
            <label className="formLabel" htmlFor="phone">
              phone
            </label>
            <input
              className="formInput"
              type="text"
              value={phone}
              onChange={(e) => handleInputChange(e)}
              id="phone"
              placeholder="phone"
            />
          </div>
          
          <div className="email">
            <label className="formLabel" htmlFor="email">
              Email
            </label>
            <input
              className="formInput"
              type="email"
              value={email}
              onChange={(e) => handleInputChange(e)}
              id="email"
              placeholder="email"
            />
          </div>

          <div className="qualification">
            <label className="formLabel" htmlFor="qualification">
            Qualification
            </label>
            <input
              className="formInput"
              type="text"
              value={qualification}
              onChange={(e) => handleInputChange(e)}
              id="qualification"
              placeholder="qualification"
            />
          </div>

          <div className="password">
            <label className="formLabel" htmlFor="password">
              Password
            </label>
            <input
              className="formInput"
              type="password"
              value={password}
              onChange={(e) => handleInputChange(e)}
              id="password"
              placeholder="Password"
            />
          </div>

          <div className="confirm-password">
            <label className="formLabel" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="formInput"
              type="password"
              value={cnfrmPass}
              onChange={(e) => handleInputChange(e)}
              id="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>

          <div className="footer">
            <button
              onClick={() => handleSubmit()}
              type="submit"
              className="btn"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
); 
}

export default AddEmployee;

import { useState } from "react";
import "./style.css";
function AddEmployee() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setage] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setpass] = useState("");
  const [cnfrmPass, setcnfrmPass] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "age") {
      setage(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setpass(value);
    }
    if (id === "confirmPassword") {
      setcnfrmPass(value);
    }
  };

  const handleSubmit = () => {
    console.log(firstName, lastName, age, email, pass, cnfrmPass);
  };

  return (
    <div>
      <div className="form">
        <h2>Add Employee Details</h2>
        <div className="form-body">
          <div className="username">
            <label className="formLabel" htmlFor="firstName">
              First Name
            </label>
            <input
              className="formInput"
              type="text"
              value={firstName}
              onChange={handleInputChange}
              id="firstName"
              placeholder="First Name"
            />
          </div>

          <div className="lastname">
            <label className="formLabel" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="formInput"
              type="text"
              value={lastName}
              onChange={(e) => handleInputChange(e)}
              id="lastName"
              placeholder="Last Name"
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

          <div className="password">
            <label className="formLabel" htmlFor="password">
              Password
            </label>
            <input
              className="formInput"
              type="password"
              value={pass}
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

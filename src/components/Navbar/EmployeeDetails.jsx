

const EmployeeDetails =({employee})=> {

    return(
        <div>
        <h2>Employee Details</h2>
        <p>Name: {employee.full_name}</p>
        <p>Cnic: {employee.cnic}</p>
        <p>Email: {employee.email}</p>
      </div>
    );
};

export default EmployeeDetails;
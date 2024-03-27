

const EmployeeDetails =({employee})=> {

    return(
        <div>
        <h2>Employee Details</h2>
        <p>Name: {employee.name}</p>
        <p>Position: {employee.position}</p>
        <p>Deparment: {employee.department}</p>
      </div>
    );
};

export default EmployeeDetails;
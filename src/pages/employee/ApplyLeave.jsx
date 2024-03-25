import React from 'react'
import SideBar from '../../components/SideBar/sideBar.jsx'
import { EmployeeSideBarData } from '../../components/SideBar/sideBarData.jsx'
import Select from 'react-select';
import "./ApplyLeave.css"

const dateNow = new Date();
const options = [
  { value: 'Sick leave', label: 'Sick leave' },
  { value: 'Vacation leave', label: 'Vacation leave' },
  { value: 'Paternity leave', label: 'Paternity leave' }
];
function ApplyLeave() {
  return (
    <div className="wrapper">
      <SideBar menuItems={EmployeeSideBarData} />
      <div className="content">
        <div className="container">
          <div className="row" >
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Leave Application</h5>
                <p className="card-text">Dashboard Apply For Leave</p>
            </div>       
          </div>
          <div className="card p-3 mt-3">
            <div className="form-container">
              <h5 className="htmlForm-title">Leave Form</h5>
            </div>
            <form>
              <div className="row ps-3 pt-3 pe-3">
                <div className="col-md-6">
                  <label htmlFor="inputStartDate" className="form-label">Start Leave Date:</label>
                  <input id="inputStartDate" className="form-control" type="date" defaultValue={dateNow.toLocaleDateString('en-CA')} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEndDate" className="form-label">End Leave Date:</label>
                  <input id="inputEndDate" className="form-control" type="date"  defaultValue={dateNow.toLocaleDateString('en-CA')}/>
                </div>
              </div>
              <div className="row ps-3 pt-3 pe-3">
                <div className="col-md-6">
                  <label htmlFor="inputEndDate" className="form-label">Leave Type:</label>
                  <Select options={options} defaultValue={options[0]}/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputLeave" className="form-label">Reason For Leave:</label>
                  <textarea className="form-control" id="inputLeave" rows="3"></textarea>
                </div>
              </div>
              <div className="row ps-3 pt-3 pe-3">
                <div className="col-md-6">
                    <button type="submit" className="btn btn-primary form-btn">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> 
    </div>
  </div>  
  )
}

export default ApplyLeave

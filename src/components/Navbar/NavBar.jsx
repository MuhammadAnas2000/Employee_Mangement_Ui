import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
import EmployeeDetails from "./EmployeeDetails";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
export const NavBar = () => {

  const [showModal,setshowModal] = useState(false);

  const handleShowModal = () =>{
    setshowModal(true);
  }
  const handleCloseModal = () =>{
    setshowModal(false);
  }
  const employeeData = {
    name : "Muhammad Anas",
    position : "Software Engineer",
    department :"Development",
  }

  return (
    <div> 
            <Navbar className="p-1 fixed-top"style={{ background:"#FFFFED"}}> 

            <img src="/image.jpg" alt="Logo" style={{ maxHeight: '72px', marginRight: '10px' }} />
                <Navbar.Brand href="#" onClick={handleShowModal} style={{color: "black",marginLeft: '20px' }}> 
                    Muhammad Anas
                </Navbar.Brand>     
            <div className="d-flex mx-auto">
                <Navbar.Brand style={{ color: "black" }}>
                    <h1>EMS</h1>
                </Navbar.Brand>
          </div>
                <Navbar.Brand style={{color: "black",marginLeft: "auto"}}> 
                    Admin 
                </Navbar.Brand> 
            </Navbar> 
            <br />
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Employee details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EmployeeDetails employee={employeeData}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
  );
};

export default NavBar;

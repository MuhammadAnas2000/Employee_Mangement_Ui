import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
  return (
    <div> 
            <Navbar className="p-1 fixed-top"style={{ background:"#FFFFED"}}> 

            <img src="/image.jpg" alt="Logo" style={{ maxHeight: '72px', marginRight: '10px' }} />
                <Navbar.Brand href="#home"style={{color: "black",marginLeft: '20px' }}> 
                    Muhammad Anas
                </Navbar.Brand> 
            <div className="d-flex mx-auto">
                <Navbar.Brand href="#home" style={{ color: "black" }}>
                    <h1>EMS</h1>
                </Navbar.Brand>
          </div>
                <Navbar.Brand href="#home"style={{color: "black",marginLeft: "auto"}}> 
                    Admin 
                </Navbar.Brand> 
            </Navbar> 
            <br />
             
        </div>
  );
};

export default NavBar;

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../images/logo.jpg';

function NavBar(){
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                    <img src={logo} width="50" height="50" alt = ""/>
                    {' '}
                    Sorting Algorithm
                </Navbar.Brand>
                <Nav className="ms-auto"> 
                    <Nav.Item>
                        <NavDropdown title="Algorithm" id="collasible-nav-dropdown">
                            <NavDropdown.Item>   Bubble Sort    </NavDropdown.Item>
                            <NavDropdown.Item>   Quick Sort     </NavDropdown.Item>
                            <NavDropdown.Item>   Merge Sort     </NavDropdown.Item>
                            <NavDropdown.Item>   Insertion Sort </NavDropdown.Item>
                            <NavDropdown.Item>   Selection Sort </NavDropdown.Item>
                            <NavDropdown.Item>   Heap Sort      </NavDropdown.Item>
                            <NavDropdown.Item>   Radix Sort     </NavDropdown.Item>
                            <NavDropdown.Item>   Bucket Sort    </NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>
                    <Nav.Item>
                        <NavDropdown title="Size of Array" id="collapsible-nav-dropdown">
                            <NavDropdown.Item>   5     </NavDropdown.Item>
                            <NavDropdown.Item>   10     </NavDropdown.Item>
                            <NavDropdown.Item>   15     </NavDropdown.Item>
                            <NavDropdown.Item>   20     </NavDropdown.Item>
                            <NavDropdown.Item>   25     </NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link> SHUFFLE ARRAY </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>  
        </div>
    );
}

export default NavBar;
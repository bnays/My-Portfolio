import { useRouter } from "next/router";
import React, { useState } from "react";
import {
   UncontrolledDropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem,
   Container,
   NavbarBrand,
   Navbar,
   Nav,
   NavItem,
   NavLink,
   NavbarToggler,
   Collapse,
} from "reactstrap";
import Image from "next/image";
// import logo from "../../assets/images/logos/green-logo.png";
import logo from "../../assets/images/logos/b-logo.png";

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);
   const router = useRouter();
   const toggle = () => setIsOpen(!isOpen);
   return (
      <div className="header1 po-relative">
         <Container>
            <Navbar className="navbar-expand-lg h1-nav">
               <NavbarBrand href="/">
                  <Image src={logo} alt="bnays" width={80} height={80} />
               </NavbarBrand>
               <NavbarToggler onClick={toggle}>
                  <span className="ti-menu"></span>
               </NavbarToggler>
               <Collapse isOpen={isOpen} navbar id="header1">
                  <Nav navbar className="ml-auto mt-2 mt-lg-0">
                     <NavItem className="active">
                        <NavLink href="#">Home</NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink href="#">About Me</NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink href="#">Work</NavLink>
                     </NavItem>
                     <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav>
                           Services <i className="fa fa-angle-down m-l-5"></i>
                        </DropdownToggle>
                        <DropdownMenu className="b-none animated fadeInUp">
                           <DropdownItem>Action</DropdownItem>
                           <DropdownItem>Another action</DropdownItem>
                           <DropdownItem>Something else here</DropdownItem>
                           <DropdownItem divider />
                           <DropdownItem>Something else here</DropdownItem>
                           <DropdownItem>Separated link</DropdownItem>
                           <DropdownItem divider />
                           <DropdownItem>One more separated link</DropdownItem>
                        </DropdownMenu>
                     </UncontrolledDropdown>
                     <NavItem>
                        <a className="btn btn-outline-info" href="#">
                           Hire Me
                        </a>
                     </NavItem>
                  </Nav>
               </Collapse>
            </Navbar>
         </Container>
      </div>
   );
};

export default Header;

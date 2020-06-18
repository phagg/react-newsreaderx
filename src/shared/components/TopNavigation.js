import React from "react";
//import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavbarBrand,
  NavItem,
  NavLink,
  //UncontrolledDropdown,
  //DropdownToggle,
  //DropdownMenu,
  //DropdownItem
} from "reactstrap";

export default class TopNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false };
  }
  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
      <div>
      <Navbar color="dark" dark expand="md">
      <NavbarBrand href="#home">
        <img
          alt="brandlogo"
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Newsreader X
      </NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">News</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/aboutus">About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/workplace">Workplace</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
    </Navbar>  
      </div>
    );
  }
}

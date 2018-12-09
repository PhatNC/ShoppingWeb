import React from 'react';
import { Nav, NavItem, Row, Col, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import '../styles/NavBarTop.css';

export default class NavBarTop extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (

      <div class="container-fluid">
      <Row>
        <Col md="6">
        <p>+8494 998 0848</p>
        </Col>
        <Col md="6">
        <Nav pills>          
                <NavItem>
                <NavLink href="#">Welcome to Sweet Cake World</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">Login/Register</NavLink>
                </NavItem>
                <NavItem>
                <NavLink disabled href="#">Item</NavLink>
                </NavItem>
            </Nav>
        </Col>
      </Row>   
      </div>
    );
  }
}
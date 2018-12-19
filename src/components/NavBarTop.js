import React from 'react';
import { Nav, NavItem, Row, Col, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import '../styles/NavBarTop.css';
import index from './Authentication';
import SignIn from './Authentication';

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
      <Row>
        <Col md="6">
        {/* <p>+8494 998 0848     Fanpage      Email</p> */}
        </Col>
        <Col md="6">
        <Nav pills>          
                <NavItem>
                <NavLink href="#">Welcome to Sweet Cake World</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="/Authentication/SignIn"> Login/Register  </NavLink>                
                </NavItem>
                <NavItem>
                <NavLink disabled href="#">Item</NavLink>
                </NavItem>
            </Nav>
        </Col>
      </Row>   
    );
  }
}
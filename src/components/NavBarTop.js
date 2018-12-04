import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import './NavBarTop.css';

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
        <div class="col-xs-6 col-sm-3 col-md-6">
            +8494 998 0848            
        </div> 
        <div class="col-xs-6 col-sm-9 col-md-6">
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
            </div>       
      </div>
    );
  }
}
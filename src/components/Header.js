import React from 'react';
import { Col,  Row,  Collapse,  Navbar,  NavbarToggler,  NavbarBrand,  Nav,  NavItem,  NavLink,  UncontrolledDropdown,
  DropdownToggle,  DropdownMenu,  DropdownItem } from 'reactstrap';
import '../styles/Header.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Row>
        <Col md="6">
          <div id="logo" class="col-md-6">
           <img src="https://www.sweetcake.co/media/jollyany/logo/default/logo_1_1_1.png"></img>
          </div>
        </Col>
        <Col md="6">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">About Us</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Cake
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Anniversary Cake
                  </DropdownItem>
                  <DropdownItem>
                    Fondant Cake
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Barbie Doll Cake
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="#">Combo Offers</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Flowers</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Gifts</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </Col>
      </Row>
    );
  }
}
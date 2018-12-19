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
        <Col sm="12" md="6">
          <div id="logo" class="col-md-6">
           <img src="https://www.sweetcake.co/media/jollyany/logo/default/logo_1_1_1.png"></img>
          </div>
        </Col>
        <Col sm="12" md="6" >
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">HOME</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">ABOUT US</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  CAKE
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    ANNIVERSARE CAKE
                  </DropdownItem>
                  <DropdownItem>
                    FONDANT CAKE
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    BARIBIE DOLL CAKE
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="#">COMBO OFFERS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">FLOWERS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">GIFTS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">CONTACT US</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </Col>
      </Row>
    );
  }
}
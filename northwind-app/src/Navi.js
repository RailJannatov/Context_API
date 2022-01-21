import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  Button,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./UserForm.css";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  Items -{this.props.card.length}
                </DropdownToggle>
                <DropdownMenu end>
                  {this.props.card.map((obj) => (
                    <DropdownItem key={obj.product.id}>
                      <Badge onClick={() => this.props.removeCard(obj)}>
                        Remove
                      </Badge>
                      {obj.product.productName}-{obj.quantity}
                      <Badge color="success">{obj.quantity}</Badge>
                    </DropdownItem>
                  ))}
                  <DropdownItem divider />
                  <DropdownItem>
                    <Button onClick={() => this.props.resetCard()}>
                      Reset
                    </Button>
                  </DropdownItem>
                  <Badge bg="success">
                    <Link to="Cart">Go To Cart</Link>
                  </Badge>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink>
                  <Link className="link-style" to="UserForm">
                    UserForm
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link className="link-style" to="MultiForm">
                    MultiForm
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link className="link-style" to="Order">
                    Order
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

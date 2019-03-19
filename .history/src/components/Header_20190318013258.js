import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar } from "react-bootstrap";

import * as actions from "../actions";

class Header extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }
  signOut() {
    this.props.SignOut();
  }
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* <nav className="navbar navbar-expand-sm w-100">
          <Link className="navbar-brand links" to="/">
            SecPark
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              {!this.props.isAuth ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link links" to="/SignUp">
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link links" to="/SignIn">
                      Sign In
                    </Link>
                  </li>
                </>
              ) : null}

              {this.props.isAuth ? (
                <>
                  {!this.props.saveState ? (
                    <li className="nav-item">
                      <Link className="nav-link btn btn-primary" to="/Request">
                        New Park
                      </Link>
                    </li>
                  ) : null}
                  <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={this.signOut}>
                      Sign Out
                    </Link>
                  </li>
                </>
              ) : null}
            </ul>
          </div>
        </nav> */}
      </div>
    );
  }
}

function MapStateToProps(state) {
  return {
    isAuth: state.auth.isAuthenticated
  };
}

export default connect(
  MapStateToProps,
  actions
)(Header);

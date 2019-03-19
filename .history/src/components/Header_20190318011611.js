import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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
        <nav className="navbar navbar-expand-lg">
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
                    <Link
                      className="nav-link background: #00B4DB;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #0083B0, #00B4DB);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #0083B0, #00B4DB); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
"
                      to="/SignIn"
                    >
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
        </nav>
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

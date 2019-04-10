import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";

var sanitize = require("sanitizer");

import CustomInput from "./CustomInput";
import * as actions from "../actions";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  async onSubmit(formData) {
    await this.props.SignIn(formData);
    console.log(sanitize.escape(formData));
    if (!this.props.errorMessage) {
      this.props.history.push("/");
    }
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="row">
        <div className="col">
          <form className="form-login" onSubmit={handleSubmit(this.onSubmit)}>
            <fieldset>
              <Field
                name="email"
                type="text"
                id="email"
                label="Enter your email"
                placeholder="example@example.com"
                component={CustomInput}
              />
            </fieldset>
            <fieldset>
              <Field
                name="password"
                type="password"
                id="password"
                label="Enter your password"
                placeholder="&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;"
                component={CustomInput}
              />
            </fieldset>

            {this.props.errorMessage ? (
              <div className="alert alert-danger">
                {this.props.errorMessage}
              </div>
            ) : null}
            <button type="submit" className="button search">
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function MapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage
  };
}

export default compose(
  connect(
    MapStateToProps,
    actions
  ),
  reduxForm({ form: "singin" })
)(SignIn);

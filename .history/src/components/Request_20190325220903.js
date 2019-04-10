import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import io from "socket.io-client";

import * as actions from "../actions";
import CustomDropDown from "./CustomDropDown";

class Request extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      socket: io.connect("http://localhost:5000")
    };
  }

  updateNeeded() {
    this.state.socket.emit("refresh", localStorage.getItem("JWT_TOKEN"));
  }

  async onSubmit(formData) {
    formData.date = new Date();
    await this.props.Request(formData);
    if (!this.props.errorMessage) {
      this.updateNeeded();
      this.props.history.push("/");
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="row">
        <div className="col">
          <h5>Chose one action</h5>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <fieldset>
              <Field component={CustomDropDown} />
            </fieldset>
            {this.props.errorMessage ? (
              <div className="alert  alert-danger">
                {this.props.errorMessage}
              </div>
            ) : null}
            <button
              type="submit"
              className="button search"
              onClick={this.updateNeeded()}
            >
              Request
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function MapStateToProps(state) {
  return {
    errorMessage: state.park.errorMessage
  };
}

export default compose(
  connect(
    MapStateToProps,
    actions
  ),
  reduxForm({ form: "Request" })
)(Request);

/* <fieldset>
  <Field
    name="name"
    type="text"
    id="Name"
    label="Name:"
    placeholder="Name"
    component={CustomInput}
  />
</fieldset>
<fieldset>
  <Field
    name="plate"
    type="text"
    id="Licence plate"
    label="Licence plate:"
    placeholder="New Plate"
    component={CustomInput}
  />
</fieldset> */

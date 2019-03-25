import React, { Component } from "react";
import CustomInput from "./CustomInput";

export default class CustomDropDown extends Component {
  render() {
    const {
      input: { value, onChange }
    } = this.props;
    return (
      <div>
        <div className="select">
          <select
            name={this.props.id}
            id={this.props.id}
            type={this.props.type}
            value={value}
            onChange={onChange}
          >
            <option value="" disabled selected>
              Select your action
            </option>
            <option value="Add">Add</option>
            <option value="Edit">Edit</option>
            <option value="Delete">Delete</option>
          </select>

          {console.log(this.props.input.value)}
        </div>
        {this.props.input.value === "Add" && (
          <div>
            <fieldset>
              <Field component={CustomInput}
            </fieldset>
          </div>
        )}
        {this.props.input.value === "Edit" && <p>Edit</p>}
        {this.props.input.value === "Delete" && <p>Delete</p>}
      </div>
    );
  }
}

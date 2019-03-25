import React, { Component } from "react";

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
            <h1>add your licence plate</h1>
            <input />
          </div>
        )}
        {this.props.input.value === "Edit" && <p>here are your plates</p>}
        {this.props.input.value === "Delete" && <p>here are your plates</p>}
      </div>
    );
  }
}
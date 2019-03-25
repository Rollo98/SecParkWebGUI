import React, { Component } from "react";

export default class CustomDropDown extends Component {
  render() {
    const {
      input: { value, onChange }
    } = this.props;
    return (
      <div className="select">
        <select
          name={this.props.id}
          id={this.props.id}
          type={this.props.type}
          value={value}
          onChange={onChange}
        >
          <option value="" disabled selected>
            Select your option
          </option>
          <option value="Add">Add</option>
          <option value="Edit">Edit</option>
          <option value="Delete">Delete</option>
        </select>
        {console.log(this.props)}
      </div>
    );
  }
}

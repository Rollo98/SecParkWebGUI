import React, { Component } from "react";
import { Field } from "redux-form";
import CustomInput from "./CustomInput";

export default class CustomDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plate: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
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
            <input
              name="plate"
              placeholder="Add your licence plate"
              type="text"
              onChange={this.onChange}
            />
            {console.log(this.state.plate)}
          </div>
        )}
        {this.props.input.value === "Edit" && (
          <p>here are your plates to edit</p>
        )}
        {this.props.input.value === "Delete" && (
          <p>here are your plates to delete</p>
        )}
      </div>
    );
  }
}

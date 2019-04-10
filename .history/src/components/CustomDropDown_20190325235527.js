import React, { Component } from "react";

export default class CustomDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plate: ""
    };
  }
  onChange = e => {
    let regex = /^[a-zA-Z]{1,2}-[0-9]{2,3}-[a-zA-Z]{3}$/;
    const invalid = <p>invalid input</p>;
    if (regex.test(e.target.value)) {
      this.setState({ [e.target.name]: e.target.value });
    }
    if (!regex.test(e.target.value)) {
      {
        return invalid;
      }
    }
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
        </div>
        {this.props.input.value === "Add" && (
          <div>
            <input
              className="addAction"
              name="plate"
              placeholder="ex: TM-01-ABC"
              type="text"
              onChange={this.onChange}
            />
            {console.log(this.state.plate)}
          </div>
        )}
        {this.props.input.value === "Edit" && (
          <p>
            api call to get the licence plate of the logged person <br />
            here are your plates to edit
          </p>
        )}
        {this.props.input.value === "Delete" && (
          <p>
            api call to get the licence plate of the logged person <br />
            here are your plates to delete
          </p>
        )}
      </div>
    );
  }
}

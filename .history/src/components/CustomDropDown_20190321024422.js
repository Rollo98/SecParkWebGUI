import React, { Component } from "react";

export default class CustomDropDown extends Component {
  render() {
    const {
      input: { value, onChange }
    } = this.props;
    return (
      <div>
        <select
          className="select"
          name={this.props.id}
          id={this.props.id}
          type={this.props.type}
          value={value}
          onChange={onChange}
        >
          <option className="add" value="Add">
            Add
          </option>
          <option className="edit" value="Edit">
            Edit
          </option>
          <option className="delete" value="Delete">
            Delete
          </option>
        </select>
      </div>
      //   <div className="group">
      //     <select
      //       id="lang"
      //       name={this.props.id}
      //       id={this.props.id}
      //       type={this.props.type}
      //       value={value}
      //       onChange={onChange}
      //     >
      //       <option value="select">Select a action</option>
      //       <option value="Add">Add</option>
      //       <option value="Edit">Edit</option>
      //       <option value="Delete">Delete</option>
      //     </select>
      //     {console.log(this.props)}
      //   </div>
    );
  }
}

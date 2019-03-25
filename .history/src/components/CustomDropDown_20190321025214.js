import React, { Component } from "react";

export default class CustomDropDown extends Component {
  render() {
    const {
      input: { value, onChange }
    } = this.props;
    return (
      <select name="search categories" id="categories" class="grid-80">
        <option value="newyork" selected>
          New York
        </option>
        <option value="chicago">Chicago</option>
        <option value="losangeles">Los Angeles</option>
        <option value="seattle">Seattle</option>
        <option value="dallas">Dallas</option>
        <option value="boston">Boston</option>
        <option value="sanfran">San Francisco</option>
      </select>
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

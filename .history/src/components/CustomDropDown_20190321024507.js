import React, { Component } from "react";

export default class CustomDropDown extends Component {
  render() {
    const {
      input: { value, onChange }
    } = this.props;
    return (
      <div class="dropdown">
        <input type="checkbox" id="my-dropdown" value="" name="my-checkbox" />
        <label for="my-dropdown" data-toggle="dropdown">
          Choose one
        </label>
        <ul>
          <li>
            <a href="#">Coffee</a>
          </li>
          <li>
            <a href="#">Coverage</a>
          </li>
          <li>
            <a href="#">Covfefe</a>
          </li>
        </ul>
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

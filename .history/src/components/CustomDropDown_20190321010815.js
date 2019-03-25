import React, { Component } from "react";

export default class CustomDropDown extends Component {
  render() {
    const {
      input: { value, onChange }
    } = this.props;
    return (
      <div class="custom-select">
        <select class="hide">
          <option>Please select an option</option>
          <option>Apples</option>
          <option>Oranges</option>
          <option>Cherries</option>
          <option>Strawberries</option>
          <option>Bananas</option>
        </select>
      </div>

      // <div className="group">
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

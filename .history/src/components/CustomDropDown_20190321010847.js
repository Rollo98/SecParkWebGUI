import React, { Component } from "react";

export default class CustomDropDown extends Component {
  render() {
    const {
      input: { value, onChange }
    } = this.props;
    return (
      <div class="custom-select">
        <select class="hide">
          <option value="fuck my ass">Please select an option</option>
          <option value="fuck my ass">Apples</option>
          <option value="fuck my ass">Oranges</option>
          <option value="fuck my ass">Cherries</option>
          <option value="fuck my ass">Strawberries</option>
          <option value="fuck my ass">Bananas</option>
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

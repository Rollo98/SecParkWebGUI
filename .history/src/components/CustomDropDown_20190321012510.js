import React, { Component } from "react";

export default class CustomDropDown extends Component {
  render() {
    const {
      input: { value, onChange }
    } = this.props;
    return (
      <div class="select animated zoomIn">
        <input type="radio" name="option" />
        <span class="placeholder">Choose...</span>
        <label class="option">
          <input type="radio" name="option" />
          <span class="title animated fadeIn">Speedometer</span>
        </label>
        <label class="option">
          <input type="radio" name="option" />
          <span class="title animated fadeIn">Fire</span>
        </label>
        <label class="option">
          <input type="radio" name="option" />
          <span class="title animated fadeIn">Badge</span>
        </label>
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

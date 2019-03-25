import React, { Component } from "react";

export default class CustomDropDown extends Component {
  render() {
    const {
      input: { value, onChange }
    } = this.props;
    return (
        <div class="select animated zoomIn">
    <!-- You can toggle select (disabled) -->
    <input type="radio" name="option">
    <i class="toggle icon icon-arrow-down"></i>
    <i class="toggle icon icon-arrow-up"></i>
    <span class="placeholder">Choose...</span>
    <label class="option">
        <input type="radio" name="option">
        <span class="title animated fadeIn"><i class="icon icon-speedometer"></i>Speedometer</span>
    </label>
    <label class="option">
        <input type="radio" name="option">
        <span class="title animated fadeIn"><i class="icon icon-fire"></i>Fire</span>
    </label>
    <label class="option">
        <input type="radio" name="option" disabled>
        <span class="title animated fadeIn"><i class="icon icon-handbag"></i>Handbag</span>
    </label>
    <label class="option">
        <input type="radio" name="option">
        <span class="title animated fadeIn"><i class="icon icon-badge"></i>Badge</span>
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

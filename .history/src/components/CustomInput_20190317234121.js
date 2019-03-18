import React, { Component } from "react";

export default class CustomInput extends Component {
  render() {
    const {
      input: { value, onChange }
    } = this.props;
    return (
      <div className="field">
        <input
          name={this.props.id}
          id={this.props.id}
          placeholder={this.props.placeholder}
          className="form-control basic-slide"
          type={this.props.type}
          value={value}
          onChange={onChange}
        />
        <label for={this.props.id} htmlFor={this.props.id}> {this.props.label}</label>
      </div>
    );
  }
}

<div class="field">
    <input type="text" name="fullname" id="fullname" placeholder="Jane Appleseed">
    <label for="fullname">Name</label>
  </div>
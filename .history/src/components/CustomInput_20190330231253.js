import React, { Component } from "react";
var sanitizer = require("sanitizer");

export default class CustomInput extends Component {
  render() {
    const {
      input: { value, onChange }
    } = this.props;
    return (
      <div className="group">
        <input
          name={this.props.id}
          id={this.props.id}
          placeholder={this.props.placeholder}
          type={this.props.type}
          value={value}
          onChange={this.test}
        />
        <span class="bar" />
        <label htmlFor={this.props.id}> {this.props.label}</label>
      </div>
    );
  }
}

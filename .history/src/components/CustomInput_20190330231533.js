import React, { Component } from "react";
var sanitizer = require("sanitizer");

export default class CustomInput extends Component {
  lol(this.value) {
    console.log("asd");
  }
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
          onChange={this.lol}
        />
        <span class="bar" />
        <label htmlFor={this.props.id}> {this.props.label}</label>
      </div>
    );
  }
}

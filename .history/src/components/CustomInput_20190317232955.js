import React, { Component } from "react";

export default class CustomInput extends Component {
  render() {
    const {
      input: { value, onChange }
    } = this.props;
    return (
      <div className="text-input">
        <label htmlFor={this.props.id}> {this.props.label}</label>
        <input
          name={this.props.id}
          id={this.props.id}
          placeholder={this.props.placeholder}
          className="form-control basic-slide"
          type={this.props.type}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
}

<div class="text-input">
  <label for="username">Username</label>
  <input type="text" name="username" id="username" placeholder="" />
  <span class="separator"> </span>
</div>;

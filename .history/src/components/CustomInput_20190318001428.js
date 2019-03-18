import React, { Component } from "react";

export default class CustomInput extends Component {
  render() {
    const {
      input: { value, onChange }
    } = this.props;
    return (
      <div className="group">
        <label htmlFor={this.props.id}> {this.props.label}</label>
        <input
          name={this.props.id}
          id={this.props.id}
          placeholder={this.props.placeholder}
          className="form-control"
          type={this.props.type}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
}

<div class="group">
  <input type="text" required="required" />
  <span class="highlight" />
  <span class="bar" />
  <label>Name</label>
</div>;

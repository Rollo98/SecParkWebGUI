import React, { Component } from "react";

export default class CustomTextarea extends Component {
  render() {
    const {
      input: { value, onChange }
    } = this.props;
    return (
      <div className="group">
        <textarea
          name={this.props.id}
          id={this.props.id}
          placeholder={this.props.placeholder}
          rows={this.props.rows ? this.props.rows : 1}
          type={this.props.type}
          value={value}
          onChange={onChange}
        />
        <span class="bar" />
        <label htmlFor={this.props.id}> {this.props.label}</label>
      </div>
    );
  }
}

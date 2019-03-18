import React, { Component } from "react";

export default class CustomInput extends Component {
  render() {
    const {
      input: { value, onChange }
    } = this.props;
    return (
      <div className="field">
        <span className="input input--kaede">
          <input
            name={this.props.id}
            id={this.props.id}
            placeholder={this.props.placeholder}
            className="input__field input__field--kaede"
            type={this.props.type}
            value={value}
            onChange={onChange}
          />
          <label
            className="input__label input__label--kaede"
            htmlFor={this.props.id}
          >
            <span className="input__label-content input__label-content--kaede">
              {this.props.label}
            </span>
          </label>
        </span>
      </div>
    );
  }
}

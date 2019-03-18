import React, { Component } from "react";

export default class CustomInput extends Component {
  render() {
    const {
      input: { value, onChange }
    } = this.props;
    return (
      <div className="field">
        <span className="input input--haruki">
          <input
            name={this.props.id}
            id={this.props.id}
            placeholder={this.props.placeholder}
            className="input__field input__field--haruki"
            type={this.props.type}
            value={value}
            onChange={onChange}
          />
          <label
            className="input__label input__label--haruki"
            htmlFor={this.props.id}
          >
            <span className>{this.props.label}</span>
          </label>
        </span>
      </div>
    );
  }
}

<span class="input input--haruki">
  <input class="input__field input__field--haruki" type="text" id="input-1" />
  <label class="input__label input__label--haruki" for="input-1">
    <span class="input__label-content input__label-content--haruki">
      First Name
    </span>
  </label>
</span>;

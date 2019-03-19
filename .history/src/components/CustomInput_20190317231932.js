import React, { Component } from "react";

export default class CustomInput extends Component {
  render() {
    const {
      input: { value, onChange }
    } = this.props;
    return (
      <div className="form-group">
        <span>
          <input
            name={this.props.id}
            id={this.props.id}
            placeholder={this.props.placeholder}
            className="form-control basic-slide"
            type={this.props.type}
            value={value}
            onChange={onChange}
          />
          <label htmlFor={this.props.id}> {this.props.label}</label>
        </span>
      </div>
    );
  }
}

<span>
  <input
    class="basic-slide"
    id="name"
    type="text"
    placeholder="Your best name"
  />
  <label for="name">Name</label>
</span>;
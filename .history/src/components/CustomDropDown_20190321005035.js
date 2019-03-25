import React, { Component } from "react";

export default class CustomDropDown extends Component {
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
          onChange={onChange}
        />
        <span class="bar" />
        <label htmlFor={this.props.id}> {this.props.label}</label>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
              Action
            </a>
            <a class="dropdown-item" href="#">
              Another action
            </a>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>
      </div>
    );
  }
}

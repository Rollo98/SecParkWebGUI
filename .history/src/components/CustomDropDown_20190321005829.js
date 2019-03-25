import React, { Component } from "react";

export default class CustomDropDown extends Component {
  render() {
    const {
      input: { value, onChange }
    } = this.props;
    return (
      <div className="group">
        <select
          id="lang"
          name={this.props.id}
          id={this.props.id}
          type={this.props.type}
          value={value}
          onChange={onChange}
        >
          <option value="select">Select a technology</option>
          <option value="Angular">Angular</option>
          <option value="Bootstrap">Bootstrap</option>
          <option value="React">React</option>
        </select>
        {console.log(this.props)}
      </div>
    );
  }
}

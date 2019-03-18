import React, { Component } from "react";

export default class CustomInput extends Component {
  render() {
    const {
      input: { value, onChange }
    } = this.props;
    return (
      <div className="Input">
        <input
          name={this.props.id}
          id={this.props.id}
          placeholder={this.props.placeholder}
          type={this.props.type}
          className="Input-text"
          value={value}
          onChange={onChange}
        />
        <label className="Input-label" htmlFor={this.props.id}>
          {" "}
          {this.props.label}
        </label>
      </div>
    );
  }
}

{
  /*import React, { Component } from "react";

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
          onChange={onChange}
        />
        <span class="bar" />
        <label htmlFor={this.props.id}> {this.props.label}</label>
      </div>
    );
  }
}
*/
}

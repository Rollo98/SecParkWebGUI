import React, { Component } from "react";

export default class CustomDropDown extends Component {
  render() {
    const {
      input: { value, onChange }
    } = this.props;
    return (
      <div className="group">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Action
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <select value={optionsState}>
              <option value="A">Apple</option>
              <option value="B">Banana</option>
              <option value="C">Cranberry</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

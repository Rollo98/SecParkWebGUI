import React, { Component } from "react";

export default class CustomDropDown extends Component {
  render() {
    const {
      input: { value, onChange }
    } = this.props;
    return (
      <section class="search-form">
        <form action="" method="GET" name="search" role="search">
          <p class="inp-wrap cat-wrap">
            <label for="categories" class="grid-20">
              in
            </label>
            <select name="search categories" id="categories" class="grid-80">
              <option value="newyork" selected>
                New York
              </option>
              <option value="chicago">Chicago</option>
            </select>
          </p>
        </form>
      </section>
      //   <div className="group">
      //     <select
      //       id="lang"
      //       name={this.props.id}
      //       id={this.props.id}
      //       type={this.props.type}
      //       value={value}
      //       onChange={onChange}
      //     >
      //       <option value="select">Select a action</option>
      //       <option value="Add">Add</option>
      //       <option value="Edit">Edit</option>
      //       <option value="Delete">Delete</option>
      //     </select>
      //     {console.log(this.props)}
      //   </div>
    );
  }
}

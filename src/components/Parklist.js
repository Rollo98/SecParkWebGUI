import React, { Component } from "react";
import Axios from "axios";

export default class Parklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      parks: []
    };
  }

  componentDidMount() {
    const jwtToken = localStorage.getItem("JWT_TOKEN");
    Axios.defaults.headers.common["Authorization"] = jwtToken;
    Axios.get("http://40.127.170.50:5000/get_numberplates").then(Response => {
      this.setState({ parks: Response.data.response });
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  renderParks() {
    const parks = Object.values(this.state.parks).filter(
      park => park.plate.indexOf(this.state.search) !== -1
    );

    var x = parks.map(n => {
      let expire = null;
      if (n.expiresAt !== null && n.expiresAt !== undefined) {
        expire = new Date(n.expiresAt);
      }
      return (
        <div className="plates park m-2 p-2 pt-3" key={n._id}>
          <h2>{n.plate}</h2>
          {expire !== null ? (
            <p>
              Expires at {expire.toLocaleString("en-GB", { hour12: false })}
            </p>
          ) : null}
        </div>
      );
    });
    return x;
  }

  render() {
    return (
      <div className="dashboard">
        <input
          autoComplete="off"
          name="search"
          type="text"
          value={this.state.search}
          className="form-control searchBar"
          placeholder="Search..."
          aria-label="Search"
          onChange={this.handleChange}
        />
        {this.renderParks()}
      </div>
    );
  }
}

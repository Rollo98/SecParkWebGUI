import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import io from "socket.io-client";

export default class Notelist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.parks = {};
    this.state.sock = {
      socket: io.connect("http://localhost:5000")
    };
    this.state.sock.socket.on(localStorage.getItem("JWT_TOKEN"), () =>
      this.componentDidMount()
    );
  }

  componentDidMount() {
    const jwtToken = localStorage.getItem("JWT_TOKEN");
    Axios.defaults.headers.common["Authorization"] = jwtToken;
    Axios.post("http://localhost:5000/parks/get_parks").then(Response =>
      this.setState({ parks: Response.data.parks })
    );
  }

  renderNotes() {
    const parks = Object.values(this.state.parks);
    var x = parks.map(n => (
      <div key={n.date}>
        <h2>
          <Link to={`/park/${n.title}:${n.date}`}>{n.title}</Link>
        </h2>
      </div>
    ));
    return x;
  }

  render() {
    return <div>{this.renderNotes()}</div>;
  }
}

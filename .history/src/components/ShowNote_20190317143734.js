import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import io from "socket.io-client";

export default class ShowNote extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.park = {};
    this.state.sock = {
      socket: io.connect("http://localhost:5000")
    };
    this.state.sock.socket.on(localStorage.getItem("JWT_TOKEN"), () =>
      this.componentDidMount()
    );
  }

  async componentWillMount() {
    let data = { title: this.props.title, date: this.props.date };
    await Axios.post("http://localhost:5000/parks/get_park", data).then(
      Response => this.setState({ park: Response.data.parkFound[0] })
    );
  }

  render() {
    return (
      <div>
        <h1>{this.state.park.title}</h1>
        <div>{this.state.park.body}</div>
      </div>
    );
  }
}

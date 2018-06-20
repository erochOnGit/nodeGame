import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as Colyseus from "colyseus.js";

class Salut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientId: null
    };
  }

  componentDidMount() {
    this.client = new Colyseus.Client("ws://localhost:4000");
    this.room = this.client.join("room");
    console.log(this.room);
    this.setState({
      clientId: this.client.id
    });
  }

  render() {
    const { clientId } = this.state;

    return <div>Salut {clientId} !</div>;
  }
}

ReactDOM.render(<Salut />, document.getElementById("app"));

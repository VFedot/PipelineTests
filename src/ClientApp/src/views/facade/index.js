import React, { Component } from "react";
import "./styles.scss";

export class Facade extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className="container facade">
          <div className="row">
            {this.props.children}
          </div>
        </div>
    );
  }
}

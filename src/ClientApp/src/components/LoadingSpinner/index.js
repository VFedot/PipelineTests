import React, { Component } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export class LoadingSpinner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { color, loading, size, message } = this.props;
    console.log(this.props.message);
    return (
      <>
        <div className="text-center">
          <ClipLoader color={color} loading={loading} size={size}></ClipLoader>
          <h1>{message}</h1>
        </div>
      </>
    );
  }
}

// "start": "cross-env SERVE=true webpack serve",

// "start": "rimraf ./build && react-scripts start",
// "build": "react-scripts build",
// "test": "cross-env CI=true react-scripts test --env=jsdom",
// "eject": "react-scripts eject",
// "lint": "eslint ./src/"

// "build": "cross-env NODE_ENV=production webpack",

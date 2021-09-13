﻿import React, { Component } from "react";
import "./styles.scss";
export class Footer extends Component {
  render() {
    return (
      <footer>
            <div className="copyright">
              <span>
                &copy;{new Date().getFullYear()} Visma Labs - CodeBeezzz
              </span>
            </div>
      </footer>
    );
  }
}
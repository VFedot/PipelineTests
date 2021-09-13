import React, { Component } from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import {Routes} from './navigation';
import {history} from './navigation/history';
import "./custom.scss";

export default class App extends Component {
  render() {
    return (
      <>
        {/* <Header />
        <Facade>
          <Route exact path="/" component={Home} />
          <Route exact path="/users/:id" component={User} />
          <Route path="/shop" component={Shop} />
          <Route path="/adminlog" component={AdminHistoryLog} />
        </Facade>
        <Footer /> */}
        <Router history={history}>
          <Routes />
        </Router>
      </>
    );
  }
}

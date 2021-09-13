import React, { Component } from "react";
import "./styles.scss";

export class Policy extends Component {
  render() {
    return (
      <div className="home container">
        <h1 className="home-title">Visma - it is all about KUDOS!</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Version</th>
              <th>Date</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allUsersData.map((user) => (
              <tr key={user.userId} className="table-row">
                <td>{user.userId}</td>
                <td>{user.userName}</td>
                <td>{user.userSurname}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

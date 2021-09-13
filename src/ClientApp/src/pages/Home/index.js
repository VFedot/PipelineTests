import React, { Component } from "react";
import "./styles.scss";
import { root } from "../../api";
import { LoadingSpinner } from "../../components";
import { TablePagination } from "@material-ui/core";
import { Link } from "react-router-dom";
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { allUsersData: [], isDataFetching: true };
  }
 componentDidMount() {
    fetch(`${root}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        this.setState({ allUsersData: result, isDataFetching: false });
      })
      .catch((err) => {});
  }

  navigateToUserPage = (e, id) => {
    this.props.history.push(`/users/${id}`);
  };

  render() {
    const showDataJSX = this.state.isDataFetching ? (
      <LoadingSpinner
        size={100}
        color={`red`}
        loading={this.state.isDataFetching}
        message={"Loading..."}
      />
    ) : (
      <table className="table table-custom no-margin table-hover table-active">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Kudos amount</th>
          </tr>
        </thead>
        <tbody>
          {this.state.allUsersData.map(
            ({ userId, userName, userSurname, total }) => {
              return (
                <tr
                  key={userId}
                >
                  <td>{userName}</td>
                  <td>{userSurname}</td>
                  <td>{total}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    );
    return (
      <>
        <main className="home col-xxl-10 m-xxl-auto col-xl-7 m-xl-auto col-lg-8 col-md-8 m-md-auto col-sm-11 m-sm-auto col-11 m-auto">
          <div className="container">
            <div className="row m-auto">
              <div className="home__title">
              <h1>Visma - it is all about KUDOS!</h1>
              </div>
            {showDataJSX}
          </div>
          </div>
        </main>
      </>
    );
  }
}

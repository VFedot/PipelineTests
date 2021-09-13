import React, { Component } from "react";
import { root } from "../../api";
import "./styles.scss";
import * as dayjs from 'dayjs';

export class User extends Component {
  constructor(props) {
    super(props);
    this.state = { userInfo: [], historyLogInfo: [] };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`${root}/users/getkudos/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.setState({ userInfo: result });
      })
      .catch((err) => {});

      fetch(`${root}/usershistorylog/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          this.setState({ historyLogInfo: result });
        })
        .catch((err) => {});
  }

  render() {
    const { name, surname, kudosAmount } = this.state.userInfo;
    return (
      <>
      <main className="user col-xxl-10 m-xxl-auto col-xl-7 m-xl-auto col-lg-8 col-md-8 m-md-auto col-sm-11 m-sm-auto col-11 m-auto">
        <h1>Visma - it is all about KUDOS!</h1>
        <h4>
          User's Personal Information
        </h4>
        <div>
          <table className="table table-bordered table-sm">
            <thead>
              <tr>
                <th>
                  First Name
                </th>
                <th>
                  Last Name
                </th>
                <th>
                  Kudos amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{name}</td>
                <td>{surname}</td>
                <td>{kudosAmount}</td>
              </tr>
            </tbody>
          </table>

          <table className="table table-bordered table-sm">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Receiver ID</th>
            <th>Transaction date</th>
            <th>
              Kudos amount
            </th>
            <th>
              Reason
            </th>
          </tr>
        </thead>
        <tbody>
        {this.state.historyLogInfo.map((cell) => {
        return (
                      <tr key={cell.transactionId}>
                        <td>{cell.sendersId}</td>
                        <td>{cell.receiverId}</td>
                        <td>{dayjs(cell.transactionDate).format("dddd, MMM D, YYYY h:mm A")}</td>
                        <td>{cell.amount}</td>
                        <td>{cell.reason}</td>
                      </tr>
        )
      })}
            </tbody>
          </table>
        </div>
      </main>
      </>
    );
  }
}

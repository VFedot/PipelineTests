import React, { Component } from "react";
import { root } from "../../api";
import "./styles.scss";
import { TextField, Popper } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const CustomPopper = (props) => {
  return <Popper {...props} placement="bottom" />;
};

export class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kudosItems: [],
      userData: [],
      selectedProduct: [],
      selectedEmployee: [],
    };

    this.onProductChange = this.onProductChange.bind(this);
    this.onEmployeeChange = this.onEmployeeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    Promise.all([
      fetch(`${root}/shopitems`, {
        method: "GET",
      }).then((response) => response.json()),
      fetch(`${root}/users`, {
        method: "GET",
      }).then((response) => response.json()),
    ])
      .then(([shopItems, userList]) => {
        this.setState({
          kudosItems: shopItems,
          userData: userList,
        });
      })
      .catch((err) => {});
  }

  renderKudoItemsJSX = () => {
    return (
      <>
        {this.state.kudosItems.map(
          ({ productId, productImage, productName, productPrice }) => {
            return (
              <div
                className="card text-center col-xl-3 col-lg-4 col-md-5 col-sm-9 col-xs-10"
                key={productId}
              >
                <img src={productImage} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Product name: {productName}</h5>
                  <p className="card-text">Product price: {productPrice}</p>
                </div>
              </div>
            );
          }
        )}
      </>
    );
  };

  onEmployeeChange(event, value) {
    this.setState({
      selectedEmployee: value,
    });
  }

  onProductChange(event, value) {
    this.setState({
      selectedProduct: value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${root}/registerpurchase`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: this.state.selectedEmployee.userId,
        productId: this.state.selectedProduct.productId,
      }),
    });
  };

  render() {
    return (
      <>
        <div>
          <h1 className="home-title">Visma - it is all about KUDOS!</h1>
          <form onSubmit={this.handleSubmit}>
            <Autocomplete
              id="combo-box-demo"
              getOptionLabel={(option) => option.name}
              style={{ width: 300 }}
              options={this.state.userData}
              onChange={this.onEmployeeChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Employee Full Name"
                  variant="outlined"
                />
              )}
              getOptionLabel={(option) =>
                `${option.userName} ${option.userSurname}`
              }
              renderOption={(option) => {
                return <h4>{`${option.userName} ${option.userSurname}`}</h4>;
              }}
              PopperComponent={CustomPopper}
            />
            <Autocomplete
              id="combo-box-demo"
              getOptionLabel={(option) => option.product}
              style={{ width: 300 }}
              options={this.state.kudosItems}
              onChange={this.onProductChange}
              renderInput={(params) => (
                <TextField {...params} label="Product" variant="outlined" />
              )}
              getOptionLabel={(option) => `${option.productName}`}
              renderOption={(option) => {
                return <h4>{option.productName}</h4>;
              }}
              PopperComponent={CustomPopper}
            />
            <button type="submit">Make a purchase</button>
          </form>

          <this.renderKudoItemsJSX />
        </div>
      </>
    );
  }
}

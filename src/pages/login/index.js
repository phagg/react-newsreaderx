import React, { Component } from "react";

import axios from "axios";

const initialState = {
  form: {
    email: "",
    password: ""
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({
      form: {
        ...this.state.form,
        email: event.target.value
      }
    });
  }

  handleChangePassword(event) {
    this.setState({
      form: {
        ...this.state.form,
        password: event.target.value
      }
    });
  }

  handleLogin(event) {
    event.preventDefault();
    console.log("form", this.state.form);

    const url = "https://beta.stockzoom.com/api-token-auth/";
    axios
      .post(url, this.state.form)
      .then(({ data }) => {
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
        axios.defaults.headers.post["Content-Type"] = "application/json";

        const meUrl = "https://beta.stockzoom.com/api/v1/me/";
        axios
          .get(meUrl)
          .then(({ data }) => console.log(data))
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  }

  render() {
    console.log("login state:", this.state);
    return (
      <div className="row">
        <div className="col-md-4">
          <h1>Login</h1>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              value={this.state.form.email}
              onChange={this.handleChangeEmail}
              placeholder="Please enter your email..."
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Please enter your password..."
              value={this.state.form.password}
              onChange={this.handleChangePassword}
            />
          </div>
          <div className="form-group">
            <button
              onClick={this.handleLogin}
              className="btn btn-primary btn-block"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

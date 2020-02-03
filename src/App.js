import React from "react";
import "./App.css";
import f from "./food.json"; // ./ - current dir
import { Login } from "./pages/login";
import { List } from "./pages/list";
import { Router } from "react-router-dom";

const credentials = [
  {
    username: "jul",
    password: "Gohan"
  }
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      username: "",
      password: ""
    };
    // this.changeState = this.changeState.bind(this);
    this.saveInput = this.saveInput.bind(this);
    this.saveInputPW = this.saveInputPW.bind(this);
  }

  changeState = () => {
    const found = credentials.find(item => {
      return (
        item.username === this.state.username &&
        item.password === this.state.password
      );
    });
    if (found) {
      this.setState({
        isLoggedIn: !this.state.isLoggedIn
      });
    }
  };

  saveInput(event) {
    console.log(event);
    this.setState({
      username: event.target.value
    });
  }

  saveInputPW(event) {
    console.log(event);
    this.setState({
      password: event.target.value
    });
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <Router>
      <div className="page">
        <div className="header">
          <div className="logo">jul-app</div>
          <div>
            {isLoggedIn ? <div>Welcome, {this.state.username}!</div> : null}
          </div>
          <button className="headButton" onClick={this.changeState}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
        <div className="body">
          {!isLoggedIn ? (
            <Login
              password={this.state.password}
              saveInput={this.saveInput}
              username={this.state.username}
              saveInputPW={this.saveInputPW}
            />
          ) : (
            <List f={f} />
          )}
        </div>
        <div className="footer">Footer</div>
      </div>
      <Router>
    );
  }
}
export default App;

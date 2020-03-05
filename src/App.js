import React from "react";
import "./App.css";
import foodList from "./food.json"; // ./ - current dir
import { Login } from "./pages/login";
import { List } from "./pages/list";
import { Item } from "./pages/item";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import { Slack } from "./pages/slack";

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

  handleLogin = () => {
    const found = credentials.find(item => {
      return (
        item.username === this.state.username &&
        item.password === this.state.password
      );
    });
    if (found) {
      console.log("smth");
      history.push("/list");
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
    this.setState({
      password: event.target.value
    });
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <Router history={history}>
        <div className="page">
          <div className="header">
            <div className="logo">jul-app</div>
            <div>
              {isLoggedIn ? <div>Welcome, {this.state.username}!</div> : null}
            </div>
            <button className="headButton" onClick={this.handleLogin}>
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </div>
          <div className="body">
            <Switch>
              <Route exact path="/">
                <Login
                  password={this.state.password}
                  saveInput={this.saveInput}
                  username={this.state.username}
                  saveInputPW={this.saveInputPW}
                />
              </Route>
              <Route path="/list">
                <List food={foodList} />
              </Route>
              <Route path="/:"></Route>
              {foodList.map(item => (
                <Route path={`/${item.id}`}>
                  <Item item={item} />
                </Route>
              ))}
              <Route path="/slack">
                <Slack />
              </Route>
            </Switch>
          </div>
          <div className="footer">Footer</div>
        </div>
      </Router>
    );
  }
}
export default App;

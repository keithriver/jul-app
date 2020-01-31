import React from "react";
import "./App.css";
import f from "./food.json"; // ./ - current dir

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
      isLoggedIn: true,
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
            <div className="form">
              <div className="input">
                <input
                  id="username"
                  onChange={this.saveInput}
                  value={this.state.username}
                />
                <div>username</div>
              </div>
              <div className="input">
                <input
                  id="password"
                  onChange={this.saveInputPW}
                  value={this.state.password}
                />
                <div>password</div>
              </div>
            </div>
          ) : (
            <div className="list">
              {f.map(item => (
                <div className="list-item">
                  <div className="bullet" />
                  <div className="list-item-header">{item.id}</div>
                  <div>
                    protein :{" "}
                    <span className="number">
                      {item["nutrition-per-100g"]
                        ? item["nutrition-per-100g"].protein
                        : item["nutrition-per-100ml"].protein}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}
export default App;

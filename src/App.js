import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div className="page">
        <div className="header">
          <div className="logo">jul-app</div>
          <div>{isLoggedIn ? <div>Welcome!</div> : null}</div>
          <button className="headButton" onClick={this.changeState}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
        <div className="body">
          <div className="form">
            <div className="input">
              <input />
              <div>username</div>
            </div>
            <div className="input">
              <input />
              <div>password</div>
            </div>
          </div>
        </div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}
export default App;

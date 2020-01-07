import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
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
      <div className="header">
        <div className="logo">jul-app</div>
        <button className="headButton" onClick={this.changeState}>
          {isLoggedIn ? "Login" : "Log Out"}
        </button>
        <div>{isLoggedIn ? <div>Welcome!</div> : null}</div>
      </div>
    );
  }
}
export default App;

import React, { useState } from "react";
import "./App.css";




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      login: true
    };
    this.changeState = this.changeState.bind(this);
  };

  changeState = () => {
    this.setState({
      login: !this.state.login
    });
  };
  
  render() {
  const { login } = this.state;

  return (
    
    <div className = 'header'>
      <div className = 'logo'>jul-app</div>
      <button 
      className = 'headButton'
      onClick={this.changeState}
      > 
        {login ? "Login" : "Log Out"} 
      </button>
    </div>
  );
}

}
export default App;

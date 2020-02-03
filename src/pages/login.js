import React from "react";

export const Login = props => {
  return (
    <div className="form">
      <div className="input">
        <input
          id="username"
          onChange={props.saveInput}
          value={props.username}
        />
        <div>username</div>
      </div>
      <div className="input">
        <input
          id="password"
          onChange={props.saveInputPW}
          value={props.password}
        />
        <div>password</div>
      </div>
    </div>
  );
};

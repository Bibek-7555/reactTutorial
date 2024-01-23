import React from "react";
import UserContext from "../Context/UserContext";
import { useContext, useState } from "react";

function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext);

    const handlesubmit = () => {
      setUser({
        username: userName,
        password: password,
      });
    };

return (
  <div>
    <h1>Login</h1>
    <input
      type="text"
      placeholder="Username"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
    />
    {"  "}
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button onClick={handlesubmit} >Login</button>
  </div>
)
}

export default Login;
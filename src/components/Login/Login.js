import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./Login.scss";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onLogin = () => {};
  return (
    <div className="login-input">
      <div>
        {"Enter email"}
        <Input
          className="login-field"
          placeholder="email@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        {"Enter password"}
        <Input
          className="login-field"
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button className="login-button" variant="contained" onClick={onLogin}>
        Login
      </Button>
    </div>
  );
}

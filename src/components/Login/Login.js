import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./Login.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../slices/user";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resetState = () => {
    setEmail("");
    setPassword("");
  };

  const onLogin = (user) => {
    dispatch(loginUser(user));
    resetState();
    navigate("/room");
  };

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
      <Button
        className="login-button"
        variant="contained"
        onClick={() => onLogin({ email, password })}
      >
        Login
      </Button>
    </div>
  );
}

import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import "./Register.scss";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onRegister = () => {};

  return (
    <div className="input-field">
      <div>
        {"Enter name"}
        <Input
          className="field"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        {"Enter email"}
        <Input
          className="field"
          placeholder="email@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        {"Enter password"}
        <Input
          className="field"
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button
        className="register-button"
        variant="contained"
        onClick={onRegister}
      >
        Register
      </Button>
    </div>
  );
}

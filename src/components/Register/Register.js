import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import "./Register.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../slices/user";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  const resetState = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const dispatch = useDispatch();

  const onRegister = (user) => {
    dispatch(registerUser(user)).then((data) => {
      if (data.payload) {
        resetState();
        navigate("/rooms");
      } else {
        setShowError(true);
      }
    });
  };

  return (
    <Box sx={{ width: "600px", margin: "auto", marginTop: "200px" }}>
      <Card>
        <CardContent>
          {showError && (
            <Stack sx={{ width: "100%", marginTop: "100px" }} spacing={2}>
              <Alert severity="error">Invalid input!</Alert>
            </Stack>
          )}
          <Typography variant="h6" component="h2" sx={{ pb: 1 }}>
            Sign up
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              required
              fullwidth={"true"}
              sx={{ my: 1 }}
              label="Name"
              value={name}
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              required
              fullwidth={"true"}
              sx={{ my: 1 }}
              label="EMail"
              value={email}
              placeholder="email@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              type={"password"}
              fullwidth={"true"}
              sx={{ my: 1 }}
              label="Password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
        </CardContent>
        <CardActions>
          <Button
            className="login-button"
            variant="contained"
            onClick={() => onRegister({ name, email, password })}
          >
            Register
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

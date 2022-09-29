import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserProfile, logoutUser } from "../../slices/user";
import "./Header.scss";

export default function Header({ user }) {
  const dispatch = useDispatch();
  const [mode, setMode] = useState("loggedOut");

  useEffect(() => {
    if (user.email) {
      setMode("loggedIn");
    }
  }, [user]);

  const onLogout = () => {
    dispatch(logoutUser());
    setMode("loggedOut");
  };

  if (mode === "loggedOut") {
    return (
      <div className="header">
        <Link to={"/user/register"}>
          <Button className="header-button" variant="contained">
            Register
          </Button>
        </Link>
        <Link to={"/user/login"}>
          <Button className="header-button" variant="contained">
            Login
          </Button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="header">
        <Link to={"/"}>
          <Button
            className="header-button"
            variant="contained"
            onClick={onLogout}
          >
            Logout
          </Button>
        </Link>
        <Link to={"/"}>
          <Button className="header-button" variant="contained">
            Create room
          </Button>
        </Link>
      </div>
    );
  }
}

import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserProfile, logoutUser } from "../../slices/user";
import "./Header.scss";

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.profile);
  const [mode, setMode] = useState("loggedOut");

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

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

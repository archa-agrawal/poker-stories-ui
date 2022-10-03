import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserProfile, logoutUser } from "../../slices/user";
import RoomModal from "../RoomModal/RoomModal";
import "./Header.scss";

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.profile);
  const [mode, setMode] = useState("loggedOut");
  const [modalOpen, setModalOpen] = useState(false);

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

  const onCreate = () => {
    setModalOpen(true);
  };
  const onClose = () => {
    setModalOpen(false);
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
        <Button
          className="header-button"
          variant="contained"
          onClick={() => onCreate()}
        >
          Create room
        </Button>
        <RoomModal modalOpen={modalOpen} onClose={onClose} />
      </div>
    );
  }
}

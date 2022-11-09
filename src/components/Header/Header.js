import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserProfile, logoutUser } from "../../slices/user";
import RoomModal from "../RoomModal/RoomModal";
import "./Header.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.profile);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  const onLogout = async () => {
    dispatch(logoutUser());
    navigate("/");
  };

  const onCreate = () => {
    setModalOpen(true);
  };
  const onClose = () => {
    setModalOpen(false);
  };

  const loginButton = (
    <Button
      variant={"contained"}
      sx={{ my: 2, display: "block", mx: 2 }}
      color="success"
      onClick={() => navigate("/user/login")}
    >
      Sign In
    </Button>
  );

  const registerButton = (
    <Button
      variant={"contained"}
      color="success"
      sx={{ my: 2, display: "block", textDecoration: "none" }}
      onClick={() => navigate("/user/register")}
    >
      Sign Up
    </Button>
  );

  const createRoomButton = (
    <Button
      variant="contained"
      color="success"
      sx={{ my: 2, display: "block", mx: 2 }}
      onClick={() => onCreate()}
    >
      + Create room
    </Button>
  );

  const roomsButton = (
    <Button
      variant="contained"
      color="secondary"
      sx={{ my: 2, display: "block", mx: 2 }}
      onClick={() => navigate("/rooms")}
    >
      Rooms
    </Button>
  );

  const userIcon = (
    <IconButton sx={{ p: 0 }} onClick={onLogout}>
      <Avatar sx={{ backgroundColor: "#ed0965" }} aria-label="user">
        {user.name?.substring(0, 1).toUpperCase()}
      </Avatar>
    </IconButton>
  );

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "#66B2FF", color: "#EEEFEF" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Pacifico",
              color: "inherit",
              textDecoration: "none",
              paddingRight: "10px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            Poker Stories
          </Typography>

          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
              marginLeft: "auto",
            }}
          >
            {user.email ? createRoomButton : loginButton}
            {user.email ? roomsButton : ""}
            {user.email ? userIcon : registerButton}
          </Box>
        </Toolbar>
      </Container>
      <RoomModal modalOpen={modalOpen} onClose={onClose} />
    </AppBar>
  );
}

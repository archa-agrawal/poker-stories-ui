import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createRoom } from "../../slices/rooms";
import "./RoomModal.scss";

export default function RoomModal({ modalOpen, onClose }) {
  const dispatch = useDispatch();
  const [roomTitle, setRoomTitle] = useState("");

  const onCreate = (roomTitle) => {
    dispatch(createRoom(roomTitle)).then(() => {
      setRoomTitle("");
      onClose();
    });
  };
  const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 10,
  };

  return (
    <div className="create-room-modal">
      <Modal
        open={modalOpen}
        onClose={() => onClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Room Title:
          </Typography>
          <div>
            <Input
              className="title-field"
              placeholder="title"
              type="text"
              value={roomTitle}
              onChange={(e) => setRoomTitle(e.target.value)}
            />
          </div>
          <div>
            <Button
              className="header-button"
              variant="contained"
              onClick={() => onCreate({ name: roomTitle })}
            >
              Create room
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

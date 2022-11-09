import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import "./StoryModal.scss";

export default function RoomModal({ modalOpen, onClose, onAddClick, roomId }) {
  const [storyTitle, setStoryTitle] = useState("");

  const onAdd = (story) => {
    onAddClick(story);
    setStoryTitle("");
    onClose();
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
            Stoty Title:
          </Typography>
          <div>
            <Input
              className="title-field"
              placeholder="title"
              type="text"
              value={storyTitle}
              onChange={(e) => setStoryTitle(e.target.value)}
            />
          </div>
          <div>
            <Button
              className="header-button"
              variant="contained"
              onClick={() => onAdd({ roomId: roomId, title: storyTitle })}
            >
              Add Story
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

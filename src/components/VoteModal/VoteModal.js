import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import "./VoteModal.scss";

export default function VoteModal({
  modalOpen,
  onClose,
  onVoteClick,
  onFinalVoteClick,
  roomId,
  title,
  id,
  voteView,
}) {
  const [value, setValue] = useState(1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onVote = (vote) => {
    onVoteClick(vote);
    setValue(1);
  };

  const onFinalVote = (finalVote) => {
    onFinalVoteClick(finalVote);
    setValue(1);
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
            {title}
          </Typography>
          <div>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">
                Select your vote
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel value={1} control={<Radio />} label={1} />
                <FormControlLabel value={2} control={<Radio />} label={2} />
                <FormControlLabel value={3} control={<Radio />} label={3} />
                <FormControlLabel value={5} control={<Radio />} label={5} />
                <FormControlLabel value={8} control={<Radio />} label={8} />
                <FormControlLabel value={13} control={<Radio />} label={13} />
                <FormControlLabel value={21} control={<Radio />} label={21} />
              </RadioGroup>
            </FormControl>
          </div>
          <div>
            {!voteView && (
              <Button
                className="header-button"
                variant="contained"
                onClick={() =>
                  onVote({ points: value, storyId: id, roomId: roomId })
                }
              >
                Submit Vote
              </Button>
            )}
            {voteView && (
              <Button
                className="header-button"
                variant="contained"
                onClick={() =>
                  onFinalVote({
                    finalPoints: value,
                    storyId: id,
                    roomId: roomId,
                  })
                }
              >
                Submit Final Vote
              </Button>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getStory, updateFinalPoints } from "../../slices/story";
import "./Story.scss";
import Button from "@mui/material/Button";
import VoteModal from "../VoteModal/VoteModal";
import { postVote } from "../../slices/storyPoints";

export default function Story() {
  const dispatch = useDispatch();
  const story = useSelector((state) => state.story.data);
  const [modalOpen, setModalOpen] = useState(false);
  const [voteView, setVoteView] = useState("");

  const { id } = useParams();

  useEffect(() => {
    dispatch(getStory(id));
  }, [dispatch, id]);

  const points = story.points.map((point) => {
    return (
      <td className="story-point" key={point.id}>
        points: {point.points} <br></br>
        voter: {point.voter}
      </td>
    );
  });
  const onVote = () => {
    setModalOpen(true);
  };
  const onFinalVote = () => {
    setVoteView("finalVote");
    setModalOpen(true);
  };
  const onClose = () => {
    setModalOpen(false);
  };
  const onVoteClick = (vote) => {
    dispatch(postVote(vote)).then(() => {
      onClose();
    });
  };
  const onFinalVoteClick = (finalVote) => {
    dispatch(updateFinalPoints(finalVote)).then(() => {
      onClose();
    });
  };

  return (
    <>
      <h3>{story.title}</h3>
      <p>final_points:{story.final_points}</p>
      <table>
        <tbody>
          <tr>{points}</tr>
        </tbody>
      </table>
      {!story.final_points && (
        <div>
          {story.isOwner && (
            <Button
              className="vote-button"
              variant="contained"
              onClick={onFinalVote}
            >
              Final Vote
            </Button>
          )}
          {!story.hasVoted && (
            <Button
              className="vote-button"
              variant="contained"
              onClick={onVote}
            >
              Vote
            </Button>
          )}
        </div>
      )}

      <VoteModal
        modalOpen={modalOpen}
        onVoteClick={onVoteClick}
        onFinalVoteClick={onFinalVoteClick}
        title={story.title}
        id={story.id}
        roomId={story.room_id}
        voteView={voteView}
      />
    </>
  );
}

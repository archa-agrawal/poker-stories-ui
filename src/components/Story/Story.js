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
  const [hasVoted, setHasVoted] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getStory(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (story.hasVoted) {
      setHasVoted(true);
    }
  }, [story.hasVoted]);

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
  const onClose = () => {
    setModalOpen(false);
  };
  const onVoteClick = (vote) => {
    dispatch(postVote(vote)).then(() => {
      setHasVoted(true);
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
              onClick={onVote}
            >
              Final Vote
            </Button>
          )}
          {!hasVoted && (
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
      />
    </>
  );
}

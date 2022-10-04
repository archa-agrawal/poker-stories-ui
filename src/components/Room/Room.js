import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getRoom } from "../../slices/room";
import Button from "@mui/material/Button";
import "./Room.scss";
import StoryModal from "../StoryModal/StoryModal";
import { createStory } from "../../slices/story";

export default function Room() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const room = useSelector((state) => state.room.data);
  const [modalOpen, setModalOpen] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getRoom(id));
  }, [dispatch, id]);

  const onStoryClick = (storyId) => {
    navigate(`/story/${storyId}`);
  };

  const onAdd = () => {
    setModalOpen(true);
  };
  const onClose = () => {
    setModalOpen(false);
  };

  const onAddClick = (story) => {
    dispatch(createStory(story));
  };
  const storyTable = room.stories?.map((story, index) => {
    return (
      <td
        className="story-info"
        key={index}
        onClick={() => onStoryClick(story.id)}
      >
        {story.title} {"  |  "}
        {story.final_points}{" "}
      </td>
    );
  });

  return (
    <div>
      <h3>{room.name}</h3>
      <div>
        <table>
          <tbody>
            <tr>{storyTable}</tr>
          </tbody>
        </table>
      </div>
      {room.isRoomOwner && (
        <Button
          className="add-story-button"
          variant="contained"
          onClick={() => onAdd()}
        >
          Add story
        </Button>
      )}
      <StoryModal
        modalOpen={modalOpen}
        onClose={onClose}
        onAddClick={onAddClick}
        roomId={id}
      />
    </div>
  );
}

import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getRoom } from "../../slices/room";
import { styled } from "@mui/material/styles";
import "./Room.scss";

export default function Room() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const room = useSelector((state) => state.room.data);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getRoom(id));
  }, [dispatch, room]);

  const onStoryClick = (storyId) => {
    navigate(`story/${storyId}`);
  };

  const storyTable = room.stories.map((story) => {
    return (
      <>
        <td className="story-info" onClick={() => onStoryClick(story.id)}>
          {story.title} {"  |  "}
          {story.final_points}{" "}
        </td>
      </>
    );
  });

  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  return (
    <div>
      <h3>{room.name}</h3>
      <div>
        <table>{storyTable}</table>
      </div>
    </div>
  );
}

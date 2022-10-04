import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getStory } from "../../slices/story";
import "./Story.scss";
import Button from "@mui/material/Button";

export default function Story() {
  const dispatch = useDispatch();
  const story = useSelector((state) => state.story.data);

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

  return (
    <>
      <h3>{story.title}</h3>
      <p>final_points:{story.final_points}</p>
      <table>
        <tbody>
          <tr>{points}</tr>
        </tbody>
      </table>
      <Button className="vote-button" variant="contained">
        Vote
      </Button>
    </>
  );
}

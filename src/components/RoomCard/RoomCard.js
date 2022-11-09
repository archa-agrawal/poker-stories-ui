import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import { Navigate } from "react-router-dom";
import "./RoomCard.scss";
import { IconButton } from "@mui/material";

export default function RoomCard({
  title,
  onRoomClick,
  roomId,
  color,
  shareIcon,
}) {
  const onShare = () => {
    navigator.clipboard.writeText(
      `${process.env.REACT_APP_URL}/room/${roomId}`
    );
  };
  return (
    <Card
      sx={{
        display: "inline-flex",
        margin: "20px",
        minWidth: "150px",
        justifyContent: "center",
        cursor: "pointer",
        backgroundColor: color,
      }}
      onClick={() => onRoomClick(roomId)}
    >
      <CardContent>
        <Typography variant="body2">{title}</Typography>
      </CardContent>
      {shareIcon && (
        <IconButton onClick={() => onShare()}>
          <ShareIcon
            sx={{
              fontSize: "small",
              marginTop: "35px",
              marginRight: "10px",
              marginLeft: "auto",
              color: "#9c27b0",
            }}
          />
        </IconButton>
      )}
    </Card>
  );
}

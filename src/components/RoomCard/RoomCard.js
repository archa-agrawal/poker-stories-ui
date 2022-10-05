import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./RoomCard.scss";

export default function RoomCard({ title, onRoomClick, roomId, color }) {
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
    </Card>
  );
}

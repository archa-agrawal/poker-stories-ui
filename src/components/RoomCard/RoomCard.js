import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./RoomCard.scss";

export default function RoomCard({ title, onRoomClick, roomId }) {
  return (
    <div className="room-container">
      <Card sx={{ minWidth: 275 }} onClick={() => onRoomClick(roomId)}>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Room title
          </Typography>
          <Typography variant="body2">{title}</Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Room owner
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

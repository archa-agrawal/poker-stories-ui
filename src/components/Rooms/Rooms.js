import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getOwnerRooms } from "../../slices/rooms";
import RoomCard from "../RoomCard/RoomCard";
import "./Rooms.scss";

export default function Rooms() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.profile);
  const rooms = useSelector((state) => state.rooms.data);
  console.log(rooms);

  useEffect(() => {
    dispatch(getOwnerRooms());
  }, [dispatch]);

  const onRoomClick = (roomId) => {
    navigate(`/room/${roomId}`);
  };

  const cardColors = ["#FCCEB4", "#C0FCB4", "#B4CBFC", "#F9B4FC"];

  const ownedRooms = rooms?.map((room, index) => {
    if (room.isRoomOwner) {
      return (
        <RoomCard
          key={room.id}
          title={room.name}
          onRoomClick={onRoomClick}
          roomId={room.id}
          color={cardColors[index % cardColors.length]}
        />
      );
    }
  });

  const registeredRooms = rooms?.map((room, index) => {
    if (!room.isRoomOwner) {
      return (
        <RoomCard
          key={room.id}
          title={room.name}
          onRoomClick={onRoomClick}
          roomId={room.id}
          color={cardColors[index % cardColors.length]}
        />
      );
    }
  });

  return (
    <div className="rooms">
      <div className="owner-rooms">
        <h3>Your rooms</h3>
        {ownedRooms.length ? <div>{ownedRooms}</div> : "No rooms yet"}
      </div>
      <div className="registered-rooms">
        <h3>Registered rooms</h3>
        {registeredRooms.length ? <div>{registeredRooms}</div> : "No rooms yet"}
      </div>
    </div>
  );
}

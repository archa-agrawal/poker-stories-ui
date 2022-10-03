import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOwnerRooms } from "../../slices/rooms";
import RoomCard from "../RoomCard/RoomCard";

export default function Rooms() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.profile);
  const rooms = useSelector((state) => state.rooms.data);

  useEffect(() => {
    dispatch(getOwnerRooms());
  }, [dispatch, user]);

  const ownedRooms = rooms.map((room) => {
    if (room.isRoomOwner) {
      return <RoomCard key={room.id} title={room.name} />;
    }
  });

  const registeredRooms = rooms.map((room) => {
    if (!room.isRoomOwner) {
      return <RoomCard key={room.id} title={room.name} />;
    }
  });

  return (
    <>
      <div className="owner-rooms">
        <h3>Your rooms</h3>
        {ownedRooms.length ? <div>{ownedRooms}</div> : "No rooms yet"}
      </div>
      <div className="registered-rooms">
        <h3>Registered rooms</h3>
        {registeredRooms.length ? <div>{registeredRooms}</div> : "No rooms yet"}
      </div>
    </>
  );
}

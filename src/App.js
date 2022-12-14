import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Rooms from "./components/Rooms/Rooms";
import Room from "./components/Room/Room";
import Story from "./components/Story/Story";

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <div
          style={{ marginTop: "70px", marginRight: "80px", marginLeft: "80px" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/register" element={<Register />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/room/:id" element={<Room />} />
            <Route path="/story/:id" element={<Story />} />
          </Routes>
        </div>
      </>
    </div>
  );
}

export default App;

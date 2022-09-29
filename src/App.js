import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Rooms from "./components/Rooms";

function App() {
  const user = useSelector((state) => state.user.profile);

  return (
    <div className="App">
      <>
        <Header user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/register" element={<Register />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/room" element={<Rooms />} />
        </Routes>
      </>
    </div>
  );
}

export default App;

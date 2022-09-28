import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Rooms from "./components/Rooms";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/user/register",
      element: <Register />,
    },
    {
      path: "/user/login",
      element: <Login />,
    },
    {
      path: "/room",
      element: <Rooms />,
    },
  ]);
  return (
    <div className="App">
      <>
        <Header />
        <RouterProvider router={router} />
      </>
    </div>
  );
}

export default App;

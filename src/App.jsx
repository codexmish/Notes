import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import LayoutOne from "./layouts/LayoutOne";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/login";

const App = () => {
  const myroute = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayoutOne />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={myroute} />
    </>
  );
};

export default App;

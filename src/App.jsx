import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from './features/share/Navbar';
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;

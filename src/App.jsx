import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import CursorGlow from "./components/CursorGlow/CursorGlow";

const App = () => {
  return (
    <>
      <CursorGlow />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;

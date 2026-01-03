import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Component/Header.jsx";
import Home from "./Component/Home.jsx";
import Menu from "./Component/Menu.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

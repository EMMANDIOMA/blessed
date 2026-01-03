import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Component/Header.jsx";
import Home from "./Component/Home.jsx";
import Menu from "./Component/Menu.jsx";
import Roasted from "./MenuHomes/Roasted.jsx";
import Beef from "./MenuHomes/Beef.jsx";
import Smothie from "./MenuHomes/Smothie.jsx";
import Tigernut from "./MenuHomes/Tigernut.jsx";
import Noddles from "./MenuHomes/Noddles.jsx";
import Snooker from "./MenuHomes/Snooker.jsx";
import Scroll from "./Component/Scroll.jsx";
const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="roasted" element={<Roasted />} />
          <Route path="beef" element={<Beef />} />
          <Route path="smothie" element={<Smothie />} />
          <Route path="tigernut" element={<Tigernut />} />
          <Route path="noddles" element={<Noddles />} />
          <Route path="snooker" element={<Snooker />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

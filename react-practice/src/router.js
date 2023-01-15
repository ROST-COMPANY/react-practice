import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.P";
import Main from "./pages/Main.P";
import MainWithRedux from "./pages/MainWithRedux.P";
import PhotoList from "./pages/PhotoList.P";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/photoList" element={<PhotoList />} />
        <Route path="/mainWithRedux" element={<MainWithRedux />} />
      </Routes>
    </BrowserRouter>
  );
}

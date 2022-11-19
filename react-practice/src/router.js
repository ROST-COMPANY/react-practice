import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.P";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<Main />} /> */}
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

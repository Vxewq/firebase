import {  Card } from "@material-tailwind/react";
import { Link, Route, Routes } from "react-router-dom";
import MetroPage from "./pages/landing/metro";
import Users from "./pages/users";
import Login from "./pages/login";
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Nav from "./components/nav";

export default function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<MetroPage />}/>
      <Route path="/users" element={<Users />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
    </>
    
  );
}

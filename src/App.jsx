import { Typography, Card } from "@material-tailwind/react";
import { Route, Routes } from "react-router-dom";
import MetroPage from "./pages/metro";

export default function App() {
  return (
    <>
    <MetroPage/>
    <Routes>
      <Route path="/" />
    </Routes>
    </>
    
  );
}

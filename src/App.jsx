import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Placements from "./pages/Placements";
import Admissions from "./pages/Admissions";
import Campus from "./pages/Campus";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/campus" element={<Campus />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

// Main App component

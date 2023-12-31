import React from "react";
import { Navbar } from "./components/Navbar";
import Carasouel from "./components/Carasouel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Poem } from "./components/Poem";
import { PoemDetail } from "./components/PoemDetail";
import { ConatactUs } from "./components/ConatactUs";
import { AllPoemList } from "./components/AllPoemList";
export const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Carasouel />} />
          <Route path="/poem/:id" element={<Poem />} />
          <Route path="/poem/:id/detail" element={<PoemDetail />} />
          <Route path="/poemDetail" element={<AllPoemList />} />
        </Routes>
        <ConatactUs />
      </Router>
    </div>
  );
};

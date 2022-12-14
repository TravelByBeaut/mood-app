import React, { useState } from "react";
import "./App.css";
import Rain from "./images/raindrop.gif";
import Fire from "./images/fire.gif";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MoodDiary from "./components/MoodDiary";

const App: React.FC = () => {
  const [mood, setMood] = useState<string>("");
  return (
    <div className="App" id="app">
      <img src={Rain} alt="rain" className="sad-rain" id="sad-rain" />
      <img src={Fire} alt="fire" className="angry-fire" id="angry-fire" />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/diary"
          element={<MoodDiary mood={mood} setMood={setMood} />}
        />
      </Routes>
    </div>
  );
};

export default App;

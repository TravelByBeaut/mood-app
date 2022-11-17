import React from "react";
import "./App.css";
import Colours from "./components/Colours";
import PieChart from "./components/PieChart";
import Rain from "./images/raindrop.gif";
import Fire from "./images/fire.gif";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <div className="App" id="app">
      <img src={Rain} alt="rain" className="sad-rain" id="sad-rain" />
      <img src={Fire} alt="fire" className="angry-fire" id="angry-fire" />
      <NavBar />
      <header className="App-header">Mood Wheel</header>
      <PieChart />
      <Colours />
    </div>
  );
};

export default App;

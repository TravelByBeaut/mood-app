import React from "react";
import "./App.css";
import Colours from "./components/Colours";
import PieChart from "./components/PieChart";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">Mood Wheel</header>
      <PieChart />
      <Colours />
    </div>
  );
};

export default App;

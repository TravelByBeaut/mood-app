import Colours from "./Colours";
import PieChart from "./PieChart";

const Home: React.FC = () => {
  return (
    <>
      <header className="App-header">Mood Wheel</header>
      <PieChart />
      <Colours />
    </>
  );
};

export default Home;

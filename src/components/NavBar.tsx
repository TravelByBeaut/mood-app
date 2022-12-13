import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const menuChange = () => {
    const menu = document.getElementById("menu");
    const sidebar = document.getElementById("sidebar");
    menu?.classList.toggle("change");
    sidebar?.classList.toggle("change");
  };

  return (
    <section>
      <section className="menu" id="menu" onClick={menuChange}>
        <section className="bar1"></section>
        <section className="bar2"></section>
        <section className="bar3"></section>
      </section>
      <section className="sidebar" id="sidebar">
        <br />
        <Link to="/" className="sidebar-button" onClick={menuChange}>
          Home
        </Link>
        <br />
        <Link to="/diary" className="sidebar-button" onClick={menuChange}>
          Diary
        </Link>
      </section>
    </section>
  );
};

export default NavBar;

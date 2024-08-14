import "./Header.css";
import { NavLink } from "react-router-dom";
import hydraLogo from "../../../assets/images/Hydra.svg";
import hydraText from "../../../assets/images/HydraText.svg";
import { useState, useEffect } from "react";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 70) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header className={scrolled ? "scrolled" : ""}>
        <NavLink to="/">
          <img src={hydraLogo} alt="" className="logo"/>
          <img src={hydraText} alt="" className="logo"/>
        </NavLink>
        <nav>
          <NavLink to="/">about</NavLink>
          <NavLink to="/">services</NavLink>
          <NavLink to="/">technologies</NavLink>
          <NavLink to="/">how to</NavLink>
        </nav>
        <div className="buttons-container">
          <button>contact us</button>
          <button>join hydra</button>
        </div>
      </header>
    </>
  );
};

export default Header;

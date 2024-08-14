import "./Header.css";
import { NavLink } from "react-router-dom";
import hydraLogo from "../../../assets/images/Hydra.svg";
import hydraText from "../../../assets/images/HydraText.svg";
const Header = () => {
  return (
    <>
      <header>
        <NavLink to="/">
          <img src={hydraLogo} alt="" />
          <img src={hydraText} alt="" />
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

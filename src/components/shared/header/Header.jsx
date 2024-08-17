import "./Header.css";
import { NavLink } from "react-router-dom";
import hydraLogo from "../../../assets/images/Hydra.svg";
import hydraText from "../../../assets/images/HydraText.svg";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
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
        <Link
          to="home"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-120}
          duration={500}
        >
          <img src={hydraLogo} alt="" className="logo" />
          <img src={hydraText} alt="" className="logo" />
        </Link>
        <nav>
          <Link
            to="about"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-120}
            duration={500}
          >
            about
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-120}
            duration={500}
          >
            services
          </Link>
          <Link
            to="technologies"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-120}
            duration={500}
          >
            technologies
          </Link>
          <Link
            to="howTo"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-120}
            duration={500}
          >
            how to
          </Link>
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

import "./Footer.css";
import hydraLogo from "../../../assets/images/Hydra.svg";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const socialIcons = [
    { id: 1, icon: "fa-brands fa-facebook", url: "#" },
    { id: 2, icon: "fa-brands fa-twitter", url: "#" },
    { id: 3, icon: "fa-brands fa-linkedin-in", url: "#" },
    { id: 4, icon: "fa-brands fa-youtube", url: "#" },
    { id: 5, icon: "fa-brands fa-instagram", url: "#" },
    { id: 6, icon: "fa-brands fa-pinterest", url: "#" },
  ];

  return (
    <>
      <footer>
        <div className="footer-container">
          <img src={hydraLogo} alt="" className="logo" />
          <div className="line"></div>
          <ul>
            <li>
              <NavLink>ABOUT</NavLink>
            </li>
            <li>
              <NavLink>SERVICES</NavLink>
            </li>
            <li>
              <NavLink>TECHNOLOGIES</NavLink>
            </li>
            <li>
              <NavLink>HOW TO</NavLink>
            </li>
            <li>
              <NavLink>JOIN HYDRA</NavLink>
            </li>
          </ul>
          <div className="line"></div>
          <ul>
            <li>
              <NavLink>F.A.Q</NavLink>
            </li>
            <li>
              <NavLink>SITEMAP</NavLink>
            </li>
            <li>
              <NavLink>CONDITIONS</NavLink>
            </li>
            <li>
              <NavLink>LICENSES</NavLink>
            </li>
          </ul>
          <div className="line"></div>
          <ul className="social">
            <li>SOCIALIZE WITH HYDRA</li>
            <ul className="content">
              {socialIcons.map((icon) => (
                <li key={icon.id}>
                  <a href={icon.url}>
                    <i className={icon.icon}></i>
                  </a>
                </li>
              ))}
            </ul>
            <button>BUILD YOUR WORLD</button>
          </ul>
        </div>
        <div className="_line"></div>
        <div className="footer-bottom">
          <p>
            2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS
            RESERVED
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

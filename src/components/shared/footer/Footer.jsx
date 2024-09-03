import "./Footer.css";
import hydraLogo from "../../../assets/images/Hydra.svg";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <img src={hydraLogo} alt="" className="logo"/>
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
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-pinterest"></i>
                </a>
              </li>
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

import "./Layout.css";
import layoutImage from "../../assets/images/LayoutImage.png";
import arrowImage from "../../assets/images/Arrow.svg";
import { useState, useEffect } from "react";
import locationIcon from "../../assets/images/Location-Icon.svg";
const Layout = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className={`layout-section ${scrolled ? "scrolled" : ""}`} id="home">
        <div className="text-container">
          <h1>
            <span>Dive</span> Into The Depths
            <br /> Of <span>Virtual Reality</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae .
          </p>
          <div className="buttons-container">
            <button>build your world</button>
            <img src={arrowImage} alt="" className="animated-arrow" />
          </div>
        </div>
        <div className="image-container">
          <img src={layoutImage} alt="" />
        </div>
      </section>
      <section className={`social-section`}>
        <div className="social-panel">
          <div className="box">
            <img src={locationIcon} alt="" />
            <div className="social-info">
              <h3>Pay Us a Visit</h3>
              <p>Union St, Seattle, WA 98101, United States</p>
            </div>
          </div>
          <div className="line"></div>
          <div className="box">
            <img src={locationIcon} alt="" />
            <div className="social-info">
              <h3>Give Us a Call</h3>
              <p>(110) 1111-1010</p>
            </div>
          </div>
          <div className="line"></div>
          <div className="box">
            <img src={locationIcon} alt="" />
            <div className="social-info">
              <h3>Send Us a Message</h3>
              <p>Contact@HydraVTech.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Layout;

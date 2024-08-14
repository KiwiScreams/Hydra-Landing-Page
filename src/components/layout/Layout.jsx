import "./Layout.css";
import layoutImage from "../../assets/images/LayoutImage.png";
import arrowImage from "../../assets/images/Arrow.svg";
import { useState, useEffect } from "react";
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
      <section className={`layout-section ${scrolled ? "scrolled" : ""}`}>
        <div className="text-container">
          <h1>
            <span>Dive</span> Into The Depths
            <br /> Of <span>Virtual Reality</span>
          </h1>
          <p className="scroll-text">
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
    </>
  );
};

export default Layout;

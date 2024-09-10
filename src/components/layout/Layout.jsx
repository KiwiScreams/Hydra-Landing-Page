import "./Layout.css";
import layoutImage from "../../assets/images/LayoutImage.png";
import arrowImage from "../../assets/images/Arrow.svg";
import { useState, useEffect } from "react";
import locationIcon from "../../assets/images/Location-Icon.svg";
import emailIcon from "../../assets/images/mail.svg";
import phoneCallIcon from "../../assets/images/phone-call.svg";
const Layout = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }, [currentSlide]);

  const handlePrevClick = () => {
    const slides = document.querySelectorAll(".slide");
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    const slides = document.querySelectorAll(".slide");
    setCurrentSlide((currentSlide + 1) % slides.length);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [handleNextClick]);
  return (
    <>
      <section
        className={`layout-section ${scrolled ? "scrolled" : ""}`}
        id="home"
      >
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
      <section className={`social-section desktop`}>
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
            <img src={phoneCallIcon} alt="" />
            <div className="social-info">
              <h3>Give Us a Call</h3>
              <p>(110) 1111-1010</p>
            </div>
          </div>
          <div className="line"></div>
          <div className="box">
            <img src={emailIcon} alt="" />
            <div className="social-info">
              <h3>Send Us a Message</h3>
              <p>Contact@HydraVTech.com</p>
            </div>
          </div>
        </div>
      </section>
      <section className={`social-section mobile`}>
        <div className="social-slider social-panel">
          <button className="prev" onClick={handlePrevClick}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <div className="slide">
            <div className="box">
              <img src={locationIcon} alt="" />
              <div className="social-info">
                <h3>Pay Us a Visit</h3>
                <p>Union St, Seattle, WA 98101, United States</p>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="box">
              <img src={phoneCallIcon} alt="" />
              <div className="social-info">
                <h3>Give Us a Call</h3>
                <p>(110) 1111-1010</p>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="box">
              <img src={emailIcon} alt="" />
              <div className="social-info">
                <h3>Send Us a Message</h3>
                <p>Contact@HydraVTech.com</p>
              </div>
            </div>
          </div>
          <button className="next" onClick={handleNextClick}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </section>
    </>
  );
};

export default Layout;

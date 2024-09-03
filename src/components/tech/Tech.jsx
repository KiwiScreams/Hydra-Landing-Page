import "./Tech.css";
import unity from "../../assets/images/unity.png";
import oculus from "../../assets/images/oculus.png";
import unreal from "../../assets/images/unreal.png";
import vive from "../../assets/images/vive.png";
import { useState, useEffect } from "react";
import longArrow from "../../assets/images/long arrow.svg";
const numbers = [
  { id: 1, title: "3D Conception & Design" },
  { id: 2, title: "Interaction Design" },
  { id: 3, title: "VR World User Testing" },
  { id: 4, title: "Hydra VR Deploy" },
];
const softwareSlides = [
  { id: 1, image: vive },
  { id: 2, image: unity },
  { id: 3, image: unreal },
  { id: 4, image: oculus },
];
const Technology = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % softwareSlides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + softwareSlides.length) % softwareSlides.length
    );
  };
  return (
    <>
      <section className="tech-section" id="technologies">
        <div className="tech-container">
          <div className="text-container">
            <h1 className="bold">TECHNOLOGIES & HARDWARE</h1>
            <h1 className="norm">USED BY HYDRA VR.</h1>
          </div>
          <div className="arrow">
            <i className="fa-solid fa-chevron-down arrow-icon"></i>
          </div>
        </div>
        <div className="software-container desktop">
          <div>
            <img src={vive} alt="" />
          </div>
          <div>
            <img src={unity} alt="" />
          </div>
          <div>
            <img src={unreal} alt="" />
          </div>
          <div>
            <img src={oculus} alt="" />
          </div>
        </div>
        <div className="software-container software-slider-container mobile">
          <div className="software-slide">
            <img src={softwareSlides[currentSlide].image} alt="" />
          </div>
          <div className="slider-controls">
            <button onClick={handlePrevSlide}>&lt;</button>
            <button onClick={handleNextSlide}>&gt;</button>
          </div>
        </div>
        <div className="build-container">
          <div className="title">
            <h1 className="bold">HOW WE BUILD</h1>
            <div className="title-container">
              <h1 className="norm">WITH HYDRA VR?</h1>
              <div className="longArrow"></div>
            </div>
          </div>
          <p>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
        <div className="numbers-container">
          {numbers.map((number) => (
            <div key={number.id} className="black">
              <div className="number">
                <h1>0{number.id}</h1>
                <h2>{number.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Technology;

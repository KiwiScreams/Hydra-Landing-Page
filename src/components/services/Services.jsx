import "./Services.css";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import { useState, useEffect } from "react";
const Services = () => {
  const servicesData = [
    {
      img: img1,
      title: "SIMULATION",
      description:
        "A technique used to model real-world processes or systems through virtual environments or scenarios, allowing users to experiment, practice, and analyze outcomes without real-world risks.",
    },
    {
      img: img2,
      title: "EDUCATION",
      description:
        "The process of acquiring knowledge, skills, values, and attitudes through various methods such as instruction, training, or self-study, aimed at fostering intellectual and personal growth.",
    },
    {
      img: img3,
      title: "SELF-CARE",
      description:
        "The practice of taking deliberate actions to maintain or improve one's physical, mental, and emotional well-being, including activities like relaxation, exercise, and healthy eating.",
    },
    {
      img: img4,
      title: "OUTDOOR",
      description:
        "Refers to activities or environments that take place outside, typically in natural settings, and often includes pursuits like hiking, camping, or simply enjoying fresh air and natural landscapes.",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slides = document.querySelectorAll(".service-slide");
    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }, [currentSlide]);

  const handlePrevClick = () => {
    const slides = document.querySelectorAll(".service-slide");
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    const slides = document.querySelectorAll(".service-slide");
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
      <section className="services-section desktop" id="services">
        <div className="build-container">
          <div className="title">
            <h1 className="bold">WHY BUILD</h1>
            <div className="title-container">
              <h1 className="norm">WITH HYDRA?</h1>
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
        <div className="services-container">
          {servicesData.map((service, index) => (
            <div className="service" key={index}>
              <div className="black">
                <div className="img">
                  <img src={service.img} alt="" />
                </div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button>TRY IT NOW</button>
            </div>
          ))}
        </div>
      </section>
      <section className="services-section mobile" id="services-mobile">
        <div className="build-container">
          <div className="title">
            <h1 className="bold">WHY BUILD</h1>
            <div className="title-container">
              <h1 className="norm">WITH HYDRA?</h1>
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
        <div className="services-container">
          <div
            style={{ position: "relative", width: "fit-content" }}
            className="just-div"
          >
            <button onClick={handlePrevClick} className="btn prev">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            {servicesData.map((service, index) => (
              <div
                className={`service service-slide ${
                  index === currentSlide ? "active" : ""
                }`}
                key={index}
              >
                <div className="black">
                  <div className="img">
                    <img src={service.img} alt="" />
                  </div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button>TRY IT NOW</button>
              </div>
            ))}
            <button onClick={handleNextClick} className="btn next">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

import "./Services.css";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
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
  return (
    <>
      <section className="services-section" id="services">
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
    </>
  );
};

export default Services;

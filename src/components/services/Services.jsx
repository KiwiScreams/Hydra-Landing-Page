import "./Services.css";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
const Services = () => {
  const servicesData = [
    {
      img: img1,
      title: "simulation",
      description:
        "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
    },
    {
      img: img2,
      title: "simulation",
      description:
        "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
    },
    {
      img: img3,
      title: "simulation",
      description:
        "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
    },
    {
      img: img4,
      title: "simulation",
      description:
        "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
    },
  ];
  return (
    <>
      <section className="services-section">
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

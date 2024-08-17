import "./AboutUs.css";
import aboutImage from "../../assets/images/about.png";
const AboutUs = () => {
  return (
    <>
      <section className="about-section" id="about">
        <div className="build-container">
          <div className="title">
            <h1 className="bold">INTRODUCTION</h1>
            <div className="title-container">
              <h1 className="norm">TO HYDRA VR</h1>
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
        <div className="about-container">
          <div className="img">
            <img src={aboutImage} alt="" />
          </div>
          <div className="content">
            <h1 className="bold">ABOUT</h1>
            <h1 className="norm">HYDRA VR</h1>
            <p>
              Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
              mattis rhoncus urna neque viverra justo. Vivamus at augue eget
              arcu dictum. Ultrices gravida dictum fusce ut placerat orci.
              Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam
              faucibus purus in massa. Est placerat in egestas erat imperdiet
              sed. Consequat semper viverra nam libero justo laoreet sit amet.
              Aliquam etiam erat velit scelerisque in dictum non consectetur a.
              Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor
              orci dapibus. Sem nulla pha retra diam sit amet nisl suscipit
              adipiscing bibendum. Leo a diam sollicitudi n tempor.
            </p>
            <button>LET'S GET IN TOUCH</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

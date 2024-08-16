import "./Tech.css";
import unity from "../../assets/images/unity.png";
import oculus from "../../assets/images/oculus.png";
import unreal from "../../assets/images/unreal.png";
import vive from "../../assets/images/vive.png";
import longArrow from "../../assets/images/long arrow.svg";
const Technology = () => {
  return (
    <>
      <section className="tech-section">
        <div className="tech-container">
          <div className="text-container">
            <h1 className="bold">TECHNOLOGIES & HARDWARE</h1>
            <h1 className="norm">USED BY HYDRA VR.</h1>
          </div>
          <div className="arrow">
            <i className="fa-solid fa-chevron-down arrow-icon"></i>
          </div>
        </div>
        <div className="software-container">
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
          <div className="black">
            <div className="number">
              <h1>01</h1>
              <h2>3D Conception & Design</h2>
            </div>
          </div>
          <div className="black">
            <div className="number">
              <h1>02</h1>
              <h2>Interaction Design</h2>
            </div>
          </div>
          <div className="black">
            <div className="number">
              <h1>03</h1>
              <h2>VR World User Testing</h2>
            </div>
          </div>
          <div className="black">
            <div className="number">
              <h1>04</h1>
              <h2>Hydra VR Deploy</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technology;

import "./Tech.css";
import unity from "../../assets/images/unity.png";
import oculus from "../../assets/images/oculus.png";
import unreal from "../../assets/images/unreal.png";
import vive from "../../assets/images/vive.png";
const Technology = () => {
  return (
    <>
      <section className="tech-section">
        <div className="tech-container">
          <div className="text-container">
            <h1>TECHNOLOGIES & HARDWARE</h1>
            <h1>USED BY HYDRA VR.</h1>
          </div>
          <div className="arrow">
            <i class="fa-solid fa-chevron-down arrow-icon"></i>
          </div>
        </div>
        <div className="software-container">
            <div><img src={vive} alt="" /></div>
            <div><img src={unity} alt="" /></div>
            <div><img src={unreal} alt="" /></div>
            <div><img src={oculus} alt="" /></div>
        </div>
      </section>
    </>
  );
};

export default Technology;

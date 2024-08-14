import "./Layout.css";
import layoutImage from "../../assets/images/LayoutImage.png";
import arrowImage from "../../assets/images/Arrow.svg";
const Layout = () => {
  return (
    <>
      <section className="layout-section">
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
            <img src={arrowImage} alt="" />
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

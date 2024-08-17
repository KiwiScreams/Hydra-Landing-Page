import AboutUs from "../../components/about us/AboutUs";
import Contacts from "../../components/contact/Contacts";
import Layout from "../../components/layout/Layout";
import Services from "../../components/services/Services";
import Technology from "../../components/tech/Tech";

const Home = () => {
  return (
    <>
      <Layout />
      <AboutUs />
      <Services />
      <Technology />
      <Contacts />
    </>
  );
};

export default Home;

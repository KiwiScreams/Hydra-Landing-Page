import { Route, Routes } from "react-router-dom";
import Footer from "./components/shared/footer/Footer";
import Header from "./components/shared/header/Header";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
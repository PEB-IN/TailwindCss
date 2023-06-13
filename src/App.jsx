import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import SingleProduct from "./pages/SingleProduct";
import Testing from "./pages/Testing";
import ScrollToTop from "./services/ScrollToTop";
import Card from "./components/Card/Card";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh();
  }, []);

  return (
    <div className="flex-1 h-fit">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/card" element={<card />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

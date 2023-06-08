import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import SingleProduct from "./pages/SingleProduct";
import Testing from "./pages/Testing";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh();
  }, []);

  return (
    <div className="flex-1 h-fit">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/testing" element={<Testing />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

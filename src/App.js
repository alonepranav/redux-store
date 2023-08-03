import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home";
import About from "./components/About.jsx";
import Cart from "./components/Cart.jsx";
import Navbar from "./components/Navbar";
const URL = "https://fakestoreapi.com/products";


function App() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      if (data) setLoader(false);
      setData(data);
    };
    getData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home data={data} loader={loader} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Toaster />
      </Router>
    </div>
  );
}

export default App;

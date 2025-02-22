import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./Components/Footer";
import Header from "./Components/Header";

import Ourfood from "./Components/Ourfood";

import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Signin from "./Components/Signin";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handelAdd = () => {
    setCount(count + 1);
  };

  return (
    <>
      <BrowserRouter>
        <Header count={count} />
        <Routes>
          <Route path="/" element={<Home handelAdd={handelAdd} />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Ourfood" element={<Ourfood handelAdd={handelAdd} />} />
          <Route path="/Signin" element={<Signin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

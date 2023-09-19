import React from "react";
import ReactDOM from "react-dom/client";

//Components
import Navbar from "./components/Navbar";
import CountDownTimer from "./components/Countdown";
// import About from "./components/About";
import Guidelines from "./components/Guide_lines";
import Sponsers from "./components/Sponsers";
import Footer from "./components/Footer";

//CSS
import "./CSS/About.css";
import "./CSS/Guide_lines.css";
import "./CSS/HeaderFooter.css";
import "./CSS/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <CountDownTimer days={11} hours={1} minutes={20} seconds={40} />
    {/* <About /> */}
    <Sponsers />
    <Guidelines />
    <Footer />
  </React.StrictMode>
);

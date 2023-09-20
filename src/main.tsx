import React from "react";
import ReactDOM from "react-dom/client";

//Components
import About from "./components/About";
import Guidelines from "./components/Guide_lines";
import CountDownTimer from "./components/Countdown";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import Sponsers from "./components/Sponsers";

//CSS
import "./CSS/About.css";
import './CSS/CountDown.css'; 
import "./CSS/Guide_lines.css";
import "./CSS/HeaderFooter.css";
import './CSS/Sponser.css';
import "./CSS/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <CountDownTimer />
    <About />
    <Guidelines />
    {/* <Sponsers /> */}
    <Footer />
  </React.StrictMode>
);

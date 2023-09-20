import React from "react";
import ReactDOM from "react-dom/client";

//Components
import Navbar from "./components/Navbar";
import CountDownTimer from "./components/Countdown";
import About from "./components/About";
import Guidelines from "./components/Guide_lines";
// import Sponsers from "./components/Sponsers";
import Footer from "./components/Footer";

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

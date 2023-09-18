import React from 'react';
import ReactDOM from 'react-dom/client';

//Components
import About from './components/About';
import CountDownTimer from './components/Countdown';
import Footer from './components/Footer';
import Guidelines from './components/Guide_lines';
import Navbar from './components/Navbar';
import Sponsers from './components/Sponsers';

//CSS
import './CSS/About.css';
import './CSS/Guide_lines.css';
import './CSS/HeaderFooter.css';
import './CSS/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <div style={{ padding: '10px', backgroundColor: '#1c1777' }}>
      <CountDownTimer days={11} hours={1} minutes={20} seconds={40} />
    </div>
    <div style={{ padding: '50px', marginTop: '140px' }}>
      <About />
    </div>
    <div style={{ padding: '10px' }}>
      <Sponsers />
    </div>
    <div style={{ padding: '10px' }}>
      <Guidelines />
    </div>
    <div>
      <Footer />
    </div>
  </React.StrictMode>
)

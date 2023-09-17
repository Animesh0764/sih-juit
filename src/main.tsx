import React from 'react'
import ReactDOM from 'react-dom/client'

//Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Guidelines from './components/Guide_lines';

//CSS
import './CSS/index.css'
import './CSS/Guide_lines.css'
import './CSS/HeaderFooter.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar/>
    <Guidelines />
    <Footer/>
  </React.StrictMode>,
)
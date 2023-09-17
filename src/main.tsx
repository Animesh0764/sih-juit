import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './Guide_lines.css'
import Guidelines from './components/Guide_lines';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <h1>Hello</h1>
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('guide')!).render(
  <React.StrictMode>
    <Guidelines />
  </React.StrictMode>,
);
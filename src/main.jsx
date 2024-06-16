import React from 'react';
import ReactDOM from 'react-dom/client';

import'./Components/Qrcode.css'
import { Qrcode } from './Components/Qrcode.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Qrcode/>
  
  </React.StrictMode>
)

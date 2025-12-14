import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/font-awesome-all.css';
import './assets/css/flaticon.css';
import './assets/css/owl.css';
import './assets/css/bootstrap.css';
import './assets/css/jquery.fancybox.min.css';
import './assets/css/animate.css';
import './assets/css/nice-select.css';
import './assets/css/odometer.css';
import './assets/css/elpath.css';
import './assets/css/color.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./bootstrap.min.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
/* import "./i18n"; */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
<App />
);

reportWebVitals(console.log);

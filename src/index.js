import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './sass/style.scss';
import Accueil from './../src/pages/Accueil/Accueil';
// import Accueil from './pages/Accueil';
// import reportWebVitals from './reportWebVitals';
// import Header from "./components/Header/Header";
import Error from "./components/Error/Error";
import Apropos from './pages/A-propos/Apropos';
// import Logements from './pages/Logements/Logements';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/Accueil" element={<Accueil />}/>
         
               
        <Route path="/Apropos" element={<Apropos />}/>
        {/* <Route path="/logements" element={<Logements />} /> */}
        <Route path="*" element={<Error />}/>
      
         {/* <App /> */}
         {/* <Accueil /> */}
      </Routes>      
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

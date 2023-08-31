import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './sass/style.scss';
import Accueil from './../src/pages/Accueil/Accueil';
import Error from "./pages/Error/Error";
import Apropos from './pages/A-propos/Apropos';
import Root from './pages/Root/Root';
import Logements from './pages/Logements/Logements';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Accueil />}/>
            <Route path="/annonce/:id" element={<Logements />}/>
            <Route path="/Apropos" element={<Apropos />}/>
            <Route path="*" element={<Error />}/>
         </Route>
        </Routes>    
    </Router>
  </React.StrictMode>
);


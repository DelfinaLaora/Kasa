import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './sass/style.scss';
import Home from './pages/Home/Home';
// import Error from "./pages/Error/Error";
import ErrorBis from "./pages/Error/ErrorBis";
import About from './pages/About/About';
import Root from './pages/Root/Root';
// import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import {createBrowserRouter, RouterProvider } from "react-router-dom";

import Housing from './pages/Housing/Housing';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Router>
//         <Routes>
//           <Route path="/" element={<Root />}>
//             <Route index element={<Accueil />}/>
//             <Route path="/annonce/:id" element={<Logements />}/>
//             <Route path="/Apropos" element={<Apropos />}/>
//             <Route path="*" element={<Error />}/>
//          </Route>
//         </Routes>    
//     </Router>
//   </React.StrictMode>
// );

// const router = createBrowserRouter(
//   createRoutesFromElements(
  
//     <Route path="/" element={<Root />}>
//       <Route index element={<Home />}/>
//       <Route path="/annonce/:id" element={<Housing />}/>
//       <Route path="/About" element={<About />}/>
//       <Route path="*" element={<Error />}/>
//     </Route>
//   )
// );

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

// import { createBrowserRouter, RouterProvider} from "react-router-dom";
// import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorBis />, 
    children: [
      { 
        // Lorsqu'une erreur est générée dans les routes enfants, 
        // la nouvelle route sans chemin la détectera et la restituera, 
        // préservant l'interface utilisateur de "root" !
        errorElement: <ErrorBis />, 

        children: [
          {index: true, element: <Home />
          },
          {
            path: "/About",
            element: <About />,
          },
          {
            // path: ":id",
            path: "/annonce/:id",
            element: <Housing />,
          },
        ],
      },
    ],
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



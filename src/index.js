import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import './sass/style.scss';
import Root from './pages/Root/Root';
import Error from "./pages/Error/Error";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Housing from './pages/Housing/Housing';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />, 
    // Enfant de la route racine
    children: [
      { 
        // Lorsqu'une erreur est générée dans les routes enfants, 
        // erroElement la détectera et la restituera, 
        // préservant l'interface utilisateur de "root" !
        errorElement: <Error />, 
        // "index" indique au routeur de faire correspondre et de restituer 
        // cette route lorsque l'utilisateur se trouve sur le chemin exact de la
        // route parent, il n'y a donc aucune autre route enfant à restituer dans 
        // le fichier <Outlet>.
        children: [
          {index: true, element: <Home />
          },
          {
            path: "/About",
            element: <About />,
          },
          {
            path: "/annonce/:id",
            element: <Housing />,
          },
          {
            path: "*",
            element: <Error />,
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



import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './sass/style.scss';
import Accueil from './../src/pages/Accueil/Accueil';
import Error from "./pages/Error/Error";
import Apropos from './pages/A-propos/Apropos';
import Root from './pages/Root/Root';
import Logements from './pages/Logements/Logements';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

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

const router = createBrowserRouter(
  createRoutesFromElements(
  
    <Route path="/" element={<Root />}>
      <Route index element={<Accueil />}/>
      <Route path="/annonce/:id" element={<Logements />}/>
      <Route path="/Apropos" element={<Apropos />}/>
      <Route path="*" element={<Error />}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


//     errorElement: <Error />, 
//     children: [
//       { 
//         // Lorsqu'une erreur est générée dans les routes enfants, 
//         // la nouvelle route sans chemin la détectera et la restituera, 
//         // préservant l'interface utilisateur de "root" !
//         errorElement: <Error />, 

//         children: [
//           {index: true, element: <Accueil />
//           },
//           {
//             path: "/Apropos",
//             element: <Apropos />,
//           },
//           {
//             // path: ":id",
//             path: "/annonce/:id",
//             element: <Logements />,
//           },
//         ],
//       },
//     ],
//   }
// ]);


// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );



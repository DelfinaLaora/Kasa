import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './sass/style.scss';
import Accueil from './../src/pages/Accueil/Accueil';
import Error from "./pages/Error/Error";
// import IdLogement from "./components/IdLogement/IdLogement";
import Apropos from './pages/A-propos/Apropos';
import Root from './pages/Root/Root';
// import Logements from './pages/Logements/Logements';
import LogementContainer from './components/LogementContainer/LogementContainer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />, 
    children: [
      { 
        // Lorsqu'une erreur est générée dans les routes enfants, 
        // la nouvelle route sans chemin la détectera et la restituera, 
        // préservant l'interface utilisateur de "root" !
        errorElement: <Error />, 

        children: [
          {index: true, element: <Accueil />
          },
          {
            path: "/Apropos",
            element: <Apropos />,
          },
          {
            // path: ":id",
            path: "/annonce/:id",
            element: <LogementContainer />,
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





// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Router>
//         <Routes>
//           <Route path="/" element={<Root />}>
//             <Route index element={<Accueil />}/>
//             <Route path="/annonce/:id" element={<LogementContainer />}/>
//             {/* <Route path='/profile/:id' element={<IdLogement />} /> */}
//             <Route path="/Apropos" element={<Apropos />}/>
//             {/* <Route path="/logements" element={<Logements />} /> */}
//             <Route path="*" element={<Error />}/>
//          </Route>
//         </Routes>    
//     </Router>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

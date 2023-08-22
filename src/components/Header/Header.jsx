import {Link} from 'react-router-dom'

function Header(){
return(    
    <nav>
        <Link to="/Accueil">Accueil</Link>
        <Link to="/Apropos">A propos</Link>
    </nav>
)
}


// import React from "react";

// const Header = () => {
//     return(
//         <>
//         <div className="header-container">
//             <h1>Je suis le header</h1>
//         </div>
//         <h2>Mon test</h2>
//         </>
//     );
// };

export default Header;
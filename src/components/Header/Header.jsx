import {Link} from 'react-router-dom'
import Logo from '../../assets/images/logo-couleur.png'


function Header(){
    return(    
        <header className='header-container'>
            <img className="header-logo" src={Logo} alt="Logo de kasa"/>
            <div>
                <Link to="/">Accueil</Link>
                <Link to="/Apropos">A propos</Link>
            </div>
        </header>
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
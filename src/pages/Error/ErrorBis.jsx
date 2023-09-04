import { Link } from "react-router-dom"
import Logo from '../../assets/images/logo-couleur.png'
import LogoFooter from '../../assets/images/logo-blanc.png'


function Error() {
  return (    
    <>
        <header className='header-contener header-error'>
            <img className="header-logo" src={Logo} alt="Logo de kasa"/>
            <div>
                <Link to="/">Accueil</Link>
                <Link to="/About">A propos</Link>
            </div>
        </header>
        <div className="contener-error"> 
             
            <h2>404</h2>            
            <h3>Oups! la page que vous demandez n'existe pas.</h3>
            <Link to="/">Retourner sur la page d'accueil</Link>            
        
        </div>  
        <footer className="footer-error">
            <img className="footer-logo" src={LogoFooter} alt="Logo de kasa"/>  
            <p>© 2020 Kasa. All rights reserved</p>  
        </footer>
    </>
  )
}
  
export default Error
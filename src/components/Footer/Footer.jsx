import LogoFooter from '../../assets/images/logo-blanc.png'

function Footer(){
    return(
        <footer>
            <img className="footer-logo" src={LogoFooter} alt="Logo de kasa"/>  
            <p>© 2020 Kasa. All rights reserved</p>  
        </footer>
    )
}
export default Footer
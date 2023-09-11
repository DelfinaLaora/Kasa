import arrowDropDown from "../../assets/images/arrow.png"
import { useRef } from "react";
import { useState } from "react"
import PropTypes from "prop-types"
function Collapse({title, text}) {

    const [open, setOpen] = useState(false)
    const [active, setActive] = useState(false)

    function Dropdown(){
        setOpen(!open)
        setActive(!active)
    }

    // On déclare un objet ref sans valeur initiale 
    const contentRef = useRef()
   
    //Pour obtenir la hauteur exact de chaque contenu pour pouvoir l'animer
    if (contentRef.current)    
    // `current` fait référence au champ textuel monté dans le DOM
    console.log(contentRef.current); 

    return(
        <>
            <article className="dropdown">
            <div className="onglet" onClick={Dropdown}>    
                <span>{title}</span>
               <div className={active ? 'rotate' : ''} ><img src={arrowDropDown} alt="arrow"/> </div> 
            </div>
            {/* On Passe ensuite notre objet ref comme attribut de ref au JSX du nœud DOM que l'on souhaite manipuler : */}
            <div className="collapse" ref={contentRef} style={open ? {height: contentRef.current.scrollHeight + "px"} : {height: "0px"}} >
                {text}
            </div>
            </article>
        </> 
    )
}

Collapse.propType = {
    title: PropTypes.string.isRequired,   
    text: PropTypes.string.isRequired,     
}

export default Collapse
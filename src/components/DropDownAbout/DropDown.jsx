import arrowDropDown from "../../assets/images/arrow.png"
import { useRef } from "react";
import { useState } from "react"
import PropTypes from "prop-types"

function DropDown({titre, title, text, description, equipments}) {

    const [open, setOpen] = useState(false)
    const [isActive, setIsActive] = useState(false)

    function Dropdown(){
        setOpen(!open)
        setIsActive(!isActive)
    }

    // On déclare un objet ref sans valeur initiale 
    const contentRef = useRef()
   
    //Pour obtenir la hauteur exact de chaque contenu pour pouvoir l'animer
    if (contentRef.current)    
    // `current` fait référence au champ textuel monté dans le DOM
    console.log(contentRef.current); 
   
    return (        
        <>
            <div className="onglet" onClick={Dropdown}>    
                <span>{title}{titre}</span>
               <div className={isActive ? 'rotate' : ''} ><img src={arrowDropDown}   alt="arrow"/> </div> 
            </div>
            {/* On Passe ensuite notre objet ref comme attribut de ref au JSX du nœud DOM que l'on souhaite manipuler : */}
            <div className="collapse" ref={contentRef} style={open ? {height: contentRef.current.scrollHeight + "px"} : {height: "0px"}} >
                <p>{text}{description}</p> 
                <ul>
                    {equipments?.map((equipement, index) =>(
                        <li key={`${equipement}-${index}`}>{equipement}</li>
                    ))}                       
                </ul>              
            </div>
        </>        
    )
}

DropDown.propType = {
    title: PropTypes.string.isRequired,
    titre: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    equipments: PropTypes.array.isRequired,    
}

export default DropDown
import PropTypes from "prop-types"
import arrowDropDown from "../../../assets/images/arrow.png"
import {useState} from 'react'
import { useRef } from "react";
// import Rating from "../../assets/images/star-active.png"
// import Rating from "../Rating/Rating";
// import arrowBack from "../../assets/images/arrow_back.png"
// import arrowForward from "../../assets/images/arrow_forward.png"


function DropDownHousingProps({description, equipments}) {
    
    const listEquipements = equipments?.map((equipement, index) =>(
        <li key={`${equipments}-${index}`}>{equipement}</li>
    ))

    const [openEquipement, setOpenEquipemet] = useState(false)
    const [openDescription, setOpenDescription] = useState(false)
    const [arrowEquipement, setArrowEquipement] = useState(false)
    const [arrowDescription, setArrowDescription] = useState(false)

    function DropdownEquipeemnt(){
        setOpenEquipemet(!openEquipement)
        setArrowEquipement(!arrowEquipement)
    }

    function DropdownDescription(){
        setOpenDescription(!openDescription)
        setArrowDescription(!arrowDescription)
    }
    
    // On déclare un objet ref sans valeur initiale 
    const contentRef = useRef()
   
     //Pour obtenir la hauteur exact de chaque contenu pour pouvoir l'animer
    if (contentRef.current)    
    // `current` fait référence au champ textuel monté dans le DOM
    console.log(contentRef.current); 
   
    return (        
        <>            
            <div className="contener-dropdown-logement">

                <article className="dropdown"> 
                    <div className="onglet" onClick={DropdownDescription}>
                        <span>Description</span>  
                        <div className={arrowDescription ? 'rotate' : ''} ><img src={arrowDropDown}  alt="arrow"/> </div>
                    </div>
                    <div className="collapse" ref={contentRef} style={openDescription ? {height: contentRef.current.scrollHeight + "px"} : {height: "0px"}}>
                        <p>{description}</p>
                    </div>
                </article>

                <article className="dropdown">
                    <div className="onglet" onClick={DropdownEquipeemnt}>
                        <span>Equipements</span>  
                        <div className={arrowEquipement ? 'rotate' : ''} ><img src={arrowDropDown}  alt="arrow"/> </div>
                    </div>

                    <div className="collapse" ref={contentRef} style={openEquipement ? {height: contentRef.current.scrollHeight + "px"} : {height: "0px"}}>        
                        <ul>
                            {listEquipements}                               
                        </ul> 
                    </div>
                </article>
            </div>   
        </>        
    )
}

DropDownHousingProps.propTypes = { 
    description: PropTypes.string.isRequired,
    equipments: PropTypes.array.isRequired,    
}

export default DropDownHousingProps
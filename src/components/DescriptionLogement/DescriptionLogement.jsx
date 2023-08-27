import PropTypes from "prop-types"
import arrowDropDown from "../../assets/images/arrow.png"
import {useState} from 'react'
// import {useEffect, useState} from 'react'
import { useRef } from "react";
// import Rating from "../../assets/images/star-active.png"
// import Rating from "../Rating/Rating";
// import arrowBack from "../../assets/images/arrow_back.png"
// import arrowForward from "../../assets/images/arrow_forward.png"


import Carousel from "../Slide/SlideProps";


function DescriptionLogement({id, title, pictures, description, name, avatar, rating, location, equipments, tags}) {
    // console.log(id)

/*************Tags ***************/
    const listTags = tags.map((tag,index) => (
        // <li key={`${tags}-${index}`}><span>{tag}</span></li>))
        <span key={`${tags}-${index}`}>{tag}</span>))
    
/**********Equipements/Description ************/
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
            <div className="contener-logement" id={id}>

            {pictures.map((picture) =>( 
            <Carousel pictures={picture} />
            ))}
               
                {/* <div className="caroussel">                   
                    <div ref={ref}></div>

                    <div className="arrow">
                        <img src={arrowBack} class="arrow_left" onClick={Prev} alt="flèche de gauche"/>
                        <img src={arrowForward}class="arrow_right" onClick={Next}  alt="flèche de droite"/>
                    </div>

                    <div class="dots">{current}/4</div>
                </div> */}
                <div className="card-contener-logement" >
                    <div>
                        <h2>{title}</h2>
                        <h3>{location}</h3>
                        <div>{listTags}</div>                       
                    </div>  
                    <div>
                       
                        <div className="host">
                            <p>{name}</p>
                            <img src={avatar} alt="profil"/>
                        </div>
                        {/* <Rating /> */}
                        <div className="rating">
                            {/* <img src={Rating} alt=""/> */}
                        </div>
                    </div>
                </div>
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
            </div>   
        </>        
    )
}

DescriptionLogement.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired, 
    description: PropTypes.string.isRequired,
    equipments: PropTypes.array.isRequired,    
}

export default DescriptionLogement
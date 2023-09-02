// import PropTypes from "prop-types"
import arrowDropDown from "../../assets/images/arrow.png"
import { useRef } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
// import DropDownHousingProps from '../../components/DropDownLogement/DropDownLogement'

function DropDownHousingProps() {

    const params = useParams()   
    const [housingData, setHousingData] = useState({})
    const navigate = useNavigate()
  
    useEffect(() => {
      async function fetchData() {
        try {
          // const response = await fetch(`http://localhost:3000/annoncesLogements.json`)
          const response = await fetch('/annoncesLogements.json')
          const json = await response.json()
          const currentObject = json.find((item) => item.id === params.id)
          if (!currentObject) {
            navigate('/NotFound')
          } else {
            setHousingData(currentObject)
          }
          console.log(currentObject)
        } catch (error) {
          console.log(error)
        }
      }
     
    fetchData()
    }, [params.id, navigate])
    
    const listEquipements = housingData.equipments
    const description = housingData.description

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
    const contentRefE = useRef()
    const contentRefD = useRef()
   
     //Pour obtenir la hauteur exact de chaque contenu pour pouvoir l'animer
    if (contentRefD.current)    
    // `current` fait référence au champ textuel monté dans le DOM
    console.log(contentRefD.current); 

    if (contentRefE.current)    
    // `current` fait référence au champ textuel monté dans le DOM
    console.log(contentRefE.current);
   
    return (        
        <>            
            <div className="contener-dropdown-logement">

                <article className="dropdown"> 
                    <div className="onglet" onClick={DropdownDescription}>
                        <span>Description</span>  
                        <div className={arrowDescription ? 'rotate' : ''} ><img src={arrowDropDown}  alt="arrow"/> </div>
                    </div>
                    <div className="collapse" ref={contentRefD} style={openDescription ? {height: contentRefD.current.scrollHeight + "px"} : {height: "0px"}}>
                        <p>{description}</p>
                    </div>
                </article>

                <article className="dropdown">
                    <div className="onglet" onClick={DropdownEquipeemnt}>
                        <span>Equipements</span>  
                        <div className={arrowEquipement ? 'rotate' : ''} ><img src={arrowDropDown}  alt="arrow"/> </div>
                    </div>

                    <div className="collapse" ref={contentRefE} style={openEquipement ? {height: contentRefE.current.scrollHeight + "px"} : {height: "0px"}}>        
                        <ul>
                            {listEquipements?.map((equipement, index) =>(
                                <li key={`${equipement}-${index}`}>{equipement}</li>
                            ))}                       
                        </ul> 
                    </div>
                </article>
            </div>   
        </>        
    )
}

// DropDownHousingProps.propTypes = { 
//     description: PropTypes.string.isRequired,
//     equipments: PropTypes.array.isRequired,    
// }

export default DropDownHousingProps
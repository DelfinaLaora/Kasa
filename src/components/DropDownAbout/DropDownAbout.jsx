import React from "react";
import DropDown from "./DropDown";

const description = [
    {        
        "title": "fiabilité",
        "text": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    },
    {        
        "title": "respect",
        "text": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {        
        "title": "service",
        "text": `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme`
    },
    {        
        "title": "sécurité",
        "text": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    },
]

function DropDownAbout() {
   
    return(
        <div className="contener-dropdown-about">
           
            <article className="dropdown"> 
                
                {description.map((data, index) =>(
                    <DropDown
                    key={`${data}.title}-${index}`}
                    title={data.title}
                    text={data.text}
                    />
                ))}
            </article>            
        </div>
    )
}

export default DropDownAbout

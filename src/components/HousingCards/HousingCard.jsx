import HousingCardProps from "./HousingCardProps"
import { useFetch } from "../../utils/Hooks/Hooks"
import { Link } from 'react-router-dom'

function HousingCard() {
    const {data, error} = useFetch('/housingListings.json')
   
    const logementsList = data   
    // console.log(logementsList)
    
    if (error) {
        return <span>Oups il y a une erreur</span>
    }

    return(
        <div className="card-contener">
          
            {logementsList?.map((logement) => (   
                // "annonce" donnera le lien vers l'annonce ayant l'ID ex <a href="/annonce/1">               
               <Link key={`logement-${logement.id}`} to ={`/annonce/${logement.id}`} className="card"> 
                    <div className="background-card"></div>
                    <HousingCardProps                                    
                        title={logement.title}
                        cover={logement.cover}
                    /> 
                </Link>
            ))}       
          
        </div>  
    )
}
export default HousingCard

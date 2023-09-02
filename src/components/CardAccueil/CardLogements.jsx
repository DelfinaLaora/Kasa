import Card from "./Card"
import { useFetch } from "../../utils/Hooks/Hooks"
import { Link } from 'react-router-dom'

function CardLogement() {
    const {data, error} = useFetch(
        '/annoncesLogements.json'        
        // `http://localhost:3000/annoncesLogements.json`
    )
   
    const logementsList = data   
    console.log(logementsList)
    
    if (error) {
        return <span>Oups il y a une erreur</span>
    }

    return(
        <div className="card-contener">
          
            {logementsList?.map((logement) => (   
                // annonce donnera le lien vers l'annonce ayant l'ID ex <a href="/annonce/1">
                // <Link key={`${logement.id}`} to ={Housing} className="card">
               <Link key={`logement-${logement.id}`} to ={`/annonce/${logement.id}`} className="card"> 
                    <Card                                    
                        title={logement.title}
                        cover={logement.cover}
                    /> 
                </Link>
            ))}       
          
        </div>  
    )
}
export default CardLogement

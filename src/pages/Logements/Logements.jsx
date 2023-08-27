import { useFetch } from "../../utils/Hooks/Hooks"
import DescriptionLogement from "../../components/DescriptionLogement/DescriptionLogement"
// import { useParams } from 'react-router-dom'


function Logements() {
   
    // console.log(id)
    // const{id} = useParams()
    const {data, error} = useFetch(
        `http://localhost:3000/annoncesLogements.json`
    )
    // const logementData = data
    // // const logementsList = data?.logementsList
    const logements = data
    // <li key={`${tags}-${index}`}><span>{tag}</span></li>))
    // console.log(logementsList.id)
    if (error) {
        return <span>Oups il y a une erreur</span>
    }
        
    return(       
        < >               
            {logements.map((description) => (   
            // annonce donnera le lien vers l'annonce ayant l'ID ex <a href="/annonce/1">              
                <DescriptionLogement 
                    // <DescriptionLogement                     
                    key={`${description.id}`} 
                    
                    id={description.id}
                    pictures={description.pictures}
                    title={description.title}
                    location={description.location}                
                    tags={description.tags}
                    name={description.host.name}
                    avatar={description.host.picture} 
                    rating={description.rating}
                    description={description.description}
                    equipments={description.equipments}
                    />
                ))}                                
        </>           
    )    
}
export default Logements
  
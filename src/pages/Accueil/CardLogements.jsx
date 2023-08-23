import Card from "../../components/Card/Card"
import { useFetch } from "../../utils/Hooks/Hooks"
import { Link } from 'react-router-dom'


function CardLogement() {
    const {data, error} = useFetch(
        `http://localhost:3000/annoncesLogements.json`
    )
    const logementsList = data
    // const logementsList = data?.logementsList
    console.log(logementsList)

    if (error) {
    return <span>Oups il y a une erreur</span>
    }

    return(
        <div className="card-contener">
          
            {logementsList?.map((profile) => (   
                // annonce donnera le lien vers l'annonce ayant l'ID ex <a href="/annonce/1">
                <Link key={`${profile.id}`} to ={`/annonce/${profile.id}`} className="card">
                    <Card             
                        title={profile.title}
                        picture={profile.cover}
                    /> 
                </Link>
            ))}       
          
        </div>  
    )
}
export default CardLogement

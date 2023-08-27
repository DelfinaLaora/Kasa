import { useFetch } from "../../../utils/Hooks/Hooks"
import PreviewHousingProps from "./PreviewHousingProps"

function PreviewHousing() {
    const {data, error} = useFetch(
        `http://localhost:3000/annoncesLogements.json`
    )
    const preview = data  
    
    if (error) {
        return <span>Oups il y a une erreur</span>
    }
        
    return(  
        <>
            {preview.map((description) => (   
        // annonce donnera le lien vers l'annonce ayant l'ID ex <a href="/annonce/1">              
                <PreviewHousingProps                                
                    key={`${description.id}`}                            
                        title={description.title}
                        location={description.location}                
                        tags={description.tags}                            
                />
            ))}  
        </>
    )
}
export default PreviewHousing
 
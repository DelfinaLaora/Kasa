import { useFetch } from "../../../utils/Hooks/Hooks"
import DropDownHousingProps from "./DropDownHousingProps"

function DropDownHousing() {
   
    const {data, error} = useFetch(
        `http://localhost:3000/annoncesLogements.json`
    )
    const description = data
  
    if (error) {
        return <span>Oups il y a une erreur</span>
    }

    return(       
       <>     
        
            {description.map((description) => (   
            // annonce donnera le lien vers l'annonce ayant l'ID ex <a href="/annonce/1">              
                <DropDownHousingProps                   
                    key={`${description.id}`}                         
                        description={description.description}
                        equipments={description.equipments}
                />
            ))}  
        
        </> 
    )    
}
export default DropDownHousing
 
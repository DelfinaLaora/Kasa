// import DropDownLogement from "../../components/DropDown/DropDownLogement"
import { useFetch } from "../../../utils/Hooks/Hooks"
// import DescriptionLogement from "../../components/DescriptionLogement/DescriptionLogement"
// import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import Host from "../../components/DescriptionLogement/Host/HostProps"
import HostProps from "./HostProps"
// import PropsDropDownLogement from "../../components/DropDown/PropsDropDownLogement"
// import DropDownLogement from "../../components/DropDown/DropDownLogement"


function Host() {
    const {data, error} = useFetch(
        `http://localhost:3000/annoncesLogements.json`
    )
    const host = data
    // // const logementsList = data?.logementsList
   
    // console.log(logementsList.id)
    if (error) {
        return <span>Oups il y a une erreur</span>
    }   
    
    return(               
        <div>
            {host.map((host) => (   
                <HostProps 
                    key={`${host.id}`} 
                    name={host.host.name}
                    avatar={host.host.picture} 
                    rating={host.rating}
                />
            ))}
        </div>          
    )    
}
export default Host

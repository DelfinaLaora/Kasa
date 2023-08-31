import React from "react"
import CardLogements from "../../components/CardAccueil/CardLogements"
import BannierAccueil from "../../components/BannierAccueil/BannierAccueil"

function Accueil(){
    return(
        <>
            <BannierAccueil />               
            <CardLogements />
        </>
    )
}

export default Accueil
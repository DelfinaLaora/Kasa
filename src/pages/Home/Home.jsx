import React from "react"
import HousingCard from "../../components/HousingCards/HousingCard"
import Bannier from "../../components/Bannier/Bannier"
import bannierHome from '../../assets/images/Image-1.png'

function Home(){
    return(
        <>
            <Bannier
                title = {"Chez vous, partout et ailleurs"}
                picture =  {bannierHome}
            />               
            <HousingCard />
        </>
    )
}

export default Home




import React from "react"
import DropDownAbout from "../../components/DropDown/DropDownAbout"
import Bannier from "../../components/Bannier/Bannier"
import pictureAbout from '../../assets/images/Image-2.png'
function About () {
    return(
        <div>
            <Bannier
                picture = {pictureAbout} 
            />  
            <DropDownAbout />  
        </div>   
    )
}

export default About

 
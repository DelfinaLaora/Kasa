import Bannier from "../../components/Bannier/Bannier"
import pictureAbout from '../../assets/images/Image-2.png'
import CollapseAbout from "../../components/Collapse/CollapseAbout"

function About () {
    return(
        <div>
            <Bannier
                picture = {pictureAbout} 
            />  
            <CollapseAbout />  
        </div>   
    )
}

export default About

 
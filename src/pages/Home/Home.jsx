import HousingCards from "../../components/HousingCards/HousingCards"
import Bannier from "../../components/Bannier/Bannier"
import bannierHome from '../../assets/images/Image-1.png'

function Home(){
    return(
        <>
            <Bannier
                title = {"Chez vous, partout et ailleurs"}
                picture =  {bannierHome}
            />               
            <HousingCards />
        </>
    )
}

export default Home

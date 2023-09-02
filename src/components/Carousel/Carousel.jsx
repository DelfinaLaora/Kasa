import { useEffect, useState } from "react"
// import PropTypes from "prop-types"
import arrowBack from "../../assets/images/arrow_back.png"
import arrowForward from "../../assets/images/arrow_forward.png"
import { useNavigate, useParams } from 'react-router-dom'
import Loader from "../../utils/Style/Loader"


function Carousel(){      
    
    const params = useParams()   
    const [housingData, setHousingData] = useState([])
    const [isDataLoading, setDataLoading] = useState(true)
    const navigate = useNavigate()
    
    useEffect(() => {
        async function fetchData() {
            setDataLoading(true)
            try {
                // const response = await fetch(`http://localhost:3000/annoncesLogements.json`)
                const response = await fetch('/annoncesLogements.json')
                const housings = await response.json()
                const housing = housings.find((item) => item.id === params.id)
                if (!housing) {
                navigate('/NotFound')
                } else {
                setHousingData(housing)
                }
                console.log(housing)
            } catch (error) {
                console.log(error)
            } finally{
                setDataLoading(false)
            }
        }
        
        fetchData()
    }, [params.id, navigate])    

    
    const slide = housingData.pictures
    console.log(slide)
    const carousel = slide?.length
    console.log(carousel)

    const [currentIndex, setCurrentIndex] = useState(0);

    if(carousel > 1){
        
        let index = currentIndex + 1    
        console.log(index)
        console.log(currentIndex)

        function Previous(){    
            setCurrentIndex((currentIndex) =>
                currentIndex - 1 < 0 ? slide.length - 1 : currentIndex - 1
            );
        };

        function Next(){
            setCurrentIndex((currentIndex) =>
                currentIndex + 1 === slide.length ? 0 : currentIndex + 1        
            );   
        };

        return(
            <>
                {isDataLoading ? (
                    <Loader />
                ) : (
                    <>        
                        <img className="caroussel-img" src={slide[currentIndex]} alt="logement" />   
                                
                        <div className="arrow">
                            <img src={arrowBack} className="arrow_left" onClick={Previous} alt="flèche de gauche"/>
                            <img src={arrowForward}className="arrow_right" onClick={Next}  alt="flèche de droite"/>
                        </div>
                        <div className="dots">
                            <p>{index + `/` + slide.length}</p>
                        </div> 
                    </>
                )}
            </>
        )
    }else{
        return (
            <>
                <img className="caroussel-img" src={slide} alt="logement" />  
            </>
        )
    }
}

// Carousel.propTypes = {  
//   pictures: PropTypes.string.isRequired,
// }

export default Carousel
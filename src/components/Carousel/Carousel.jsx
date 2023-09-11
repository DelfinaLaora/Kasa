import { useState } from "react"
import PropTypes from "prop-types"
import arrowBack from "../../assets/images/arrow_back.png"
import arrowForward from "../../assets/images/arrow_forward.png"
function Carousel({pictures}){      

    const [currentIndex, setCurrentIndex] = useState(0);

    if(pictures.length > 1){
        
        let index = currentIndex + 1    

        function Next(){
            setCurrentIndex((currentSlide) =>
            currentSlide + 1 === pictures.length ? 0 : currentSlide + 1        
            );   
        };

        function Previous(){    
            setCurrentIndex((currentSlide) =>
            currentSlide - 1 < 0 ? pictures.length - 1 : currentSlide - 1
            );
        };       

        return(
            <>               
                <>      
                    <div className="arrow">
                        <img src={arrowBack} className="arrow_left" onClick={Previous} alt="flèche de gauche"/>
                        <img src={arrowForward} className="arrow_right" onClick={Next}  alt="flèche de droite"/>
                    </div>

                    <img className="caroussel-img" src={pictures[currentIndex]} alt="logement" />   
                                        
                    <div className="dots">
                        <p>{index + `/` + pictures.length}</p>
                    </div>  
                </>               
            </>
        )
    }else{
        return (
            <>
                <img className="caroussel-img" src={pictures} alt="logement" />  
            </>
        )
    }
}

Carousel.propType = {  
  pictures: PropTypes.array.isRequired,
}

export default Carousel
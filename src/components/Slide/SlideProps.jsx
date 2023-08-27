import { useState } from "react";
import PropTypes from "prop-types"
import arrowBack from "../../assets/images/arrow_back.png"
import arrowForward from "../../assets/images/arrow_forward.png"

function Carousel(pictures){  

    const [currentIndex, setCurrentIndex] = useState(0);
   
    function Next(){
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === pictures.length ? 0 : prevIndex + 1        
      );
    };

    function Previous(){    
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? pictures.length - 1 : prevIndex - 1
      );
    };

    return(
      <div className="caroussel">  
      {/* {pictures.map((pictures) =>(  */}
            <img className="caroussel-img" src={pictures[currentIndex]} alt="logement" />    
      {/* ))} */}
                       
              <div className="arrow">
                  <img src={arrowBack} className="arrow_left" onClick={Previous} alt="flèche de gauche"/>
                  <img src={arrowForward}className="arrow_right" onClick={Next}  alt="flèche de droite"/>
              </div>
              <div className="dots">{currentIndex}/{pictures.length}</div> 
      </div>
    )
}

Carousel.propTypes = {  
  pictures: PropTypes.string.isRequired,
}

export default Carousel
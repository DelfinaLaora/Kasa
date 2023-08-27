import PropTypes from "prop-types"
import ratingGood from "../../assets/images/star-active.png"
import ratingBad from "../../assets/images/star-inactive.png"

function Star({rating}) {

    const starRed = <img src={ratingGood} alt='star-icon-yellow'/>
    const starWhite = 5*<img src={ratingBad} alt='star-icon'/>
    const rating = data.rating

    if(rating.value === 5) {
      return (
        5*{starRed} 
      )
    }

    if(rating.value === 4) {
       return (
       4*{starRed}+1*{starWhite}
       )
    }

    return (        
        <>            
            <div>{starRed}{starWhite}</div>                    
        </>        
    )
}

Star.propTypes = {  
    rating: PropTypes.string.isRequired,
}

export default Star
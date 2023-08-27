import PropTypes from "prop-types"

function Card({cover, title}) {
    return (        
        <>            
            <img src={cover} alt="logement"/>
            <h2>{title}</h2>           
        </>        
    )
}

Card.propTypes = {  
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
}

export default Card


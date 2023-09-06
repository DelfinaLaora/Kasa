import PropTypes from "prop-types"
function CardProps({cover, title}) {
    return (        
        <>            
            <img src={cover} alt="logement"/>
            <h2>{title}</h2>           
        </>        
    )
}

CardProps.propType = {  
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
}

export default CardProps


import PropTypes from "prop-types"
function HousingCardsProps({cover, title}) {
    return (        
        <>            
            <img src={cover} alt="logement"/>
            <h2>{title}</h2>           
        </>        
    )
}

HousingCardsProps.propType = {  
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
}

export default HousingCardsProps


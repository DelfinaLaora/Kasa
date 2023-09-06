import PropTypes from "prop-types"
function HousingCardProps({cover, title}) {
    return (        
        <>            
            <img src={cover} alt="logement"/>
            <h2>{title}</h2>           
        </>        
    )
}

HousingCardProps.propType = {  
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
}

export default HousingCardProps


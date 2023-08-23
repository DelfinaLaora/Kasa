import PropTypes from "prop-types"
import arrowDropDown from "../../assets/images/arrow.png"

function PropsDropDown({title, text}) {
    return (        
        <>
            <div className="onglet">
                <span>{title}</span>  
                <img src={arrowDropDown}  alt="arrow"/> 
            </div>
            <div className="collapse">
                <p>{text}</p>
            </div>
        </>        
    )
}

PropsDropDown.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default PropsDropDown
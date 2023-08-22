import PropTypes from "prop-types"

function Card({picture, title}) {
    return (
        <div>
            <img src={picture} alt="logement"/>
            <h2>{title}</h2>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

export default Card
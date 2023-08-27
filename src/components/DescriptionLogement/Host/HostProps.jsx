import PropTypes from "prop-types"
// import Rating from "../../assets/images/star-active.png"
// import Rating from "../Rating/Rating";

function HostProps({name, avatar, rating}) {
   
    return (        
        <>                                                          
            <div>
                <div className="host">
                    <p>{name}</p>
                    <img src={avatar} alt="profil"/>
                </div>
                {/* <Rating /> */} 
                <div className="rating">
                    <img src={rating} alt=""/>
                </div> 
            </div>
        </>        
    )
}

HostProps.propTypes = {    
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
}

export default HostProps
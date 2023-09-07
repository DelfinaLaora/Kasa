import PropTypes from "prop-types"
function Bannier({title, picture}){
    return(            
        <div className='bannier'>
            <div className='background'></div>
            <img  src={picture} alt='Falaise'/>   
            <h1>{title}</h1>
        </div>    
    )
}

Bannier.propType = {  
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,    
  }

export default Bannier

         
            
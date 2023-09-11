import PropTypes from "prop-types"
function Bannier({title, picture}){

    if(!title){
        return(            
            <div className='bannier'>
                <img  src={picture} alt="Falaise"/>   
            </div>    
        )
    }else{
        return(            
            <div className='bannier'>
                <img  src={picture} alt="Falaise"/>                   
                <h1>{title}</h1>
            </div>    
        )
    }
}

Bannier.propType = {  
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,    
  }

export default Bannier

         

import pictureAbout from '../../assets/images/Image-2.png'

function Bannier({title, picture}){
    return(            
        <div className='bannier'>
            <div className='background'></div>
            <img  src={picture} alt='Falaise'/>   
            <h1>{title}</h1>
        </div>    
    )
}

export default Bannier

         
            
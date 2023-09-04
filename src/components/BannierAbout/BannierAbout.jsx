import pictureAbout from '../../assets/images/Image-2.png'

function BannierAbout(){
    return(    
        
            <div className='bannier'>
                <div className='background'></div>
                <img  src={pictureAbout} alt='Falaise'/>   
            </div>    
    )
}

export default BannierAbout;
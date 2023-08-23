import LogoImageAccueil from '../../assets/images/Image-1.png'

function ImageAccueil(){
    return(    
        
            <div className='image-accueil'>
                <div className='background'></div>
                <img  src={LogoImageAccueil} alt='Falaise'/>           
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        

    )
}

export default ImageAccueil;
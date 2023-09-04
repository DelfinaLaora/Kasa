import bannierHome from '../../assets/images/Image-1.png'

function Bannier(){
    return(            
        <div className='bannier'>
            <div className='background'></div>
            <img  src={bannierHome} alt='Falaise'/>           
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Bannier;
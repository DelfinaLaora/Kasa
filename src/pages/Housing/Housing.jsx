import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import Carousel from '../../components/Carousel/Carousel'
import Loader from '../../utils/Style/Loader'
import Rating from '../../components/Rating/Rating'
import Collapse from '../../components/Collapse/Collapse'

function Housing() {
    const params = useParams()  
    const navigate = useNavigate() 
    const [housingData, setHousingData] = useState({})
    const [isDataLoading, setDataLoading] = useState(true)    
  
    useEffect(() => {
        async function fetchData() {

            setDataLoading(true)

            try {
                const response = await fetch('/housingListings.json')
                const json = await response.json()
                const currentObject = json.find((item) => item.id === params.id)

                if (!currentObject) {
                  navigate('/error')

                } else {
                  setHousingData(currentObject)
                }

            } catch (error) {
              console.log(error)

            } finally{
              setDataLoading(false)
            }
        }
     
    fetchData()
    }, [params.id, navigate])

    const tags = housingData.tags
    const titre = Object.keys(housingData)

    return(    
      <>
        {isDataLoading ? (
          <Loader />
          ) : (   
            <>  
                <div className="contener-logement">

                    <div className="caroussel"> 
                      <Carousel pictures={housingData.pictures}/>            
                    </div>

                    <div className="card-contener-logement" >
                        <div> 
                            <h2>{housingData.title}</h2>
                            <h3>{housingData.location}</h3>
                            <div className='tags'>
                                {tags.map((tag, index)=>
                                <div key={`${tag}-${index}`}><p>{tag}</p></div>)}
                            </div>                   
                        </div>      

                        <div className="lessor">                       
                            <div className="host">
                                <p>{housingData.host.name}</p>
                                <img src={housingData.host.picture} alt="profil"/>
                            </div>
                          
                            <div className="rating">                       
                                <Rating rating={housingData.rating}/>                        
                            </div>
                        </div>
                    </div>

                </div>
                <div className="contener-dropdown-logement">                    
                        <Collapse 
                            title = {titre[4]}             
                            text = <p>{housingData.description}</p>
                        />
                   
                        <Collapse 
                            title = {titre[8]}
                            text =  <ul>
                                        {housingData.equipments.map((equipement, index) =>(
                                            <li key={`${equipement}-${index}`}>{equipement}</li>
                                        ))}                       
                                    </ul>                                          
                        />
                   
                </div>
            </>
          )
        }
      </>           
    )    
}

export default Housing
  

          
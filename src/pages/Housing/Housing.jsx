import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import Carousel from '../../components/Carousel/Carousel'
import Loader from '../../utils/Style/Loader'
import Rating from '../../components/Rating/Rating'
import DropDown from '../../components/DropDown/DropDown'

function Housing() {

    const params = useParams()   
    const [housingData, setHousingData] = useState({})
    const [isDataLoading, setDataLoading] = useState(true)
    const navigate = useNavigate()
  
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

                // console.log(currentObject)
            } catch (error) {
              console.log(error)

            } finally{
              setDataLoading(false)
            }
        }
     
    fetchData()
    }, [params.id, navigate])

    // console.log(housingData)
    const tags = housingData.tags
    // console.log(tags)
    const titre = Object.keys(housingData)
    // console.log(titre)

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

                    <article className="dropdown">
                        <DropDown
                            titre = {titre[4]}             
                            description = {housingData.description}
                        />
                    </article>

                    <article className="dropdown">
                        <DropDown 
                            titre = {titre[8]}
                            equipments = {housingData.equipments}                 
                        />
                    </article>
                </div>
            </>
          )
        }
      </>           
    )    
}

export default Housing
  

          
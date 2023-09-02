import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
// import PropTypes from "prop-types"
// import Card from '../../components/CardAccueil/Card'
import DropDownHousingProps from '../../components/DropDownLogement/DropDownLogement'
import Carousel from '../../components/Carousel/Carousel'
import Loader from '../../utils/Style/Loader'
import Rating from '../../components/Rating/Rating'


function Logements() {

    const params = useParams()   
    const [housingData, setHousingData] = useState({})
    const [isDataLoading, setDataLoading] = useState(true)
    const navigate = useNavigate()
  
    useEffect(() => {
      async function fetchData() {
        setDataLoading(true)
        try {
          // const response = await fetch(`http://localhost:3000/annoncesLogements.json`)
          const response = await fetch('/annoncesLogements.json')
          const json = await response.json()
          const currentObject = json.find((item) => item.id === params.id)
          if (!currentObject) {
            navigate('/NotFound')
          } else {
            setHousingData(currentObject)
          }
          console.log(currentObject)
        } catch (error) {
          console.log(error)
        } finally{
          setDataLoading(false)
        }
      }
     
    fetchData()
    }, [params.id, navigate])

    console.log(housingData)
    const hosts = housingData.host
    // console.log(hosts)
    const tags= housingData.tags
    // console.log(tags)
    const ratings = housingData.rating
    console.log(ratings)
    return(    
      <>
        {isDataLoading ? (
        <Loader />
        ) : (   
          <>  
            <div className="contener-logement">
            <div className="caroussel"> 
            <Carousel />
            </div>
              <div className="card-contener-logement" >
                  <div> 
                      <h2>{housingData.title}</h2>
                      <h3>{housingData.location}</h3>
                      <div>{tags.map((tag, index)=>
                        <span key={`${tag}-${index}`}>{tag}</span>)}
                      </div>                   
                  </div>      
                  <div>                       
                      <div className="host">
                          <p>{hosts.name}</p>
                          <img src={hosts.picture} alt="profil"/>
                      </div>
                     
                      <div className="rating">
                        <Rating rating={housingData.rating}/>                        
                      </div>
                  </div>
              </div>
            </div>
            <DropDownHousingProps />

          </>
        )}
      </>           
    )    
}
// Logements.propTypes = {
//     id: PropTypes.string.isRequired,
//     // pictures: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     // location: PropTypes.string.isRequired,
//     // tags: PropTypes.array.isRequired,
//     host: PropTypes.array.isRequired,
//     // picture: PropTypes.string.isRequired,
//     // rating: PropTypes.string.isRequired, 
//     // description: PropTypes.string.isRequired,
//     // equipments: PropTypes.array.isRequired,    
// }
export default Logements
  

            {/* <Host host={hosts}/> */}
     
        {/* <Card /> */}
            {/* <div className="caroussel"> */}
                {/* <div>{housingData.title}</div>
                <div>{housingData.id}</div>
                <div>{housingData.location}</div> */}
               {/* <div>{housingData.pictures}</div> */}
               {/* <div>{slide}</div> */}
               {/* {slide.map((picture, index) =>(
        <img key={`${picture}-${index}`} className="caroussel-img" src={picture} alt="logement" />   
    ))} */}
                    {/* <div>{hosts?.name}</div>
                    <div><img src={hosts?.picture}/></div> */}
                {/* <HostProps                                     
                    key={`${housingData.id}`} 
                    
                    id={housingData.id}
                    // name = {housingData.host.name}
                    picture={housingData.picture}
                    title={housingData.title}
                /> */}
                       
            {/* </div>     */}
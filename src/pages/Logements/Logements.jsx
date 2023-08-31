import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
// import PropTypes from "prop-types"

function Logements() {

    const params = useParams()   
    const [housingData, setHousingData] = useState({})
    
    useEffect(() => {     
        fetch(`http://localhost:3000/annoncesLogements.json`)
        .then ((response) => response.json())
        .then((jsonResponse) => {
            setHousingData(jsonResponse.find((housing) => housing.id === params.id))
        })
                   
    }, [params.id]) 

    console.log(housingData)

    const hosts = housingData.host.name
    console.log(hosts)
    // function Host(){
    //     const host = housingData.host
    //     const lisItems = host.map((host)=>
    //         <li key={host.toString()}>
    //             {host}
    //         </li>
    //     )
    //     return(
    //         <ul>{lisItems}</ul>
    //     )
    // }

    // const{title, picture, host, pictures}= housingData

        // if(housing === undefined){
        //     navigate("/error")
        // }

    // if (error) {
    //     return <span>Oups il y a une erreur</span>
    // }
   

    return(       
        < >  
            {/* <Host host={hosts}/> */}
        
            <div className="caroussel"> 
                <div>{housingData.title}</div>
                <div>{housingData.id}</div>
                <div>{housingData.location}</div>
                <div>{housingData.pictures}</div>
                    {/* <div>{housingData.name}</div> */}
                {/* <HostProps                                     
                    key={`${housingData.id}`} 
                    
                    id={housingData.id}
                    // name = {housingData.host.name}
                    picture={housingData.picture}
                    title={housingData.title}
                /> */}
                       
            </div>    
        </>           
    )    
}
// Logements.propTypes = {
//     id: PropTypes.string.isRequired,
//     pictures: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     tags: PropTypes.array.isRequired,
//     host: PropTypes.string.isRequired,
//     picture: PropTypes.string.isRequired,
//     rating: PropTypes.string.isRequired, 
//     description: PropTypes.string.isRequired,
//     equipments: PropTypes.array.isRequired,    
// }
export default Logements
  
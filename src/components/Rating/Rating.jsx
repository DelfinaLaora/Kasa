import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Loader from "../../utils/Style/Loader"

function Rating(){

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
   
    const rating = housingData?.rating    
    const stars = [1, 2, 3, 4, 5]    
    const starActive = <svg className="star, active" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
    const star = <svg className="star" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
    
    return(       
        <>
        {isDataLoading ? (
            <Loader />
            ) : (   
                <>

                    {stars.map((rangeElem)=>
                        rating >= rangeElem ?  (
                            <span key={rangeElem}>{starActive}</span>
                        ) : null
                    )}

                    {stars.map((rangeElem)=> 
                        rating <= rangeElem -1 ? (                       
                            <span key={rangeElem}>{star}</span>
                        ) : null
                    )}
                    
                </>
            )}
        </>       
    )
}

export default Rating


import ratingGood from "../../assets/images/star-active.png"
import ratingBad from "../../assets/images/star-inactive.png"
import { useFetch } from "../../utils/Hooks/Hooks"
// import Star from "./Star"
// import { useFetch } from "../../utils/Hooks/Hooks"

// import { useState } from "react"

// function rating(){
//     const [start, setStar] = useState()

   

function Rating(){
    const {data} = useFetch(
        `http://localhost:3000/annoncesLogements.json`
    )
    const starRed = <img src={ratingGood} alt='star-icon-yellow'/>
    const starWhite = <img src={ratingBad} alt='star-icon'/>
    // let i = 0
    // const rating = data[2].rating
    const rating = data
    // const ratingNote = rating[0].rating
// console.log(rating)



    if(rating === 3) {
        return (
          5*{starRed} 
        )
      }
  
      if(rating.value === 4) {
         return (
         4*{starRed}+1*{starWhite}
         )
      }
  
      return (        
          <>            
          {/* {rating.map((ratings, index) => (
                key={`${ratings.rating}-${index}`} */}
            {/* <div key={`${ratings.rating}-${index}`}>{starRed} {starWhite}</div>
                        // rating={ratings.rating}
                     */}
                  
           <div>{starRed} {starWhite}</div>  
             {/* ))}                   */}
           </>        
      )
    
    // const nbrStar = 
    
    //       rating === '5' ? (
    //             5*<img src={ratingGood} alt='star-icon-yellow'/>
    //       ) : (
    //             4*<img src={ratingGood} alt='star-icon-yellow'/>
    //       )

    // const scaleType = 
    //         careType === 'light' ? (
    //                 <img src={ratingGood} alt='star-icon-yellow'/>
    //         ) : (
    //                 <img src={ratingBad} alt='star-icon'/>
    //         )

    // return (
    //    <>
    //         {rating.map((ratings, index) => (
           
    //             key={`${ratings.rating}-${index}`}
    //             rating={ratings.rating}
            
    // //         ))}
    //         {/* {rating.map((ratings) => (
           
    //         ratings.value = 5 ?( 

    //         <div key ={ratingValue.toString()}>{starWhite}</div>
    //         ) : null
           
    //         ))} */}
            
           
    //             {/* scaleValue >= rangeElem ? (
    //                 <span key={rangeElem.toString()}>{scaleType}</span>     
    //              ) : null
    //         )} */}
            
       
    //     </>
    // )
}

export default Rating
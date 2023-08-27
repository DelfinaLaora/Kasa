// import Carousel from "./SlideProps2";
// import { useFetch } from "../../../utils/Hooks/Hooks"


// function Slide2() {
    
//     const {data, error} = useFetch(
//         `http://localhost:3000/annoncesLogements.json`
//     )
//     const pictures = data
//     console.log(pictures.length )
//     if (error) {
//         return <span>Oups il y a une erreur</span>
//     }
        
//     return(       
//         <>
//             {pictures.map((pictures, index) => (   
//             // annonce donnera le lien vers l'annonce ayant l'ID ex <a href="/annonce/1">              
//                 <Carousel 
//                     key={`${pictures}-${index}`} 
//                     pictures={pictures.pictures}                        
//                 />
//             ))}  
//         </> 
//     )
// }
// export default Slide2
import PropTypes from "prop-types"
// import arrowDropDown from "../../assets/images/arrow.png"
// import {useState} from 'react'
// import { useRef } from "react";
// import Rating from "../../assets/images/star-active.png"
// import Rating from "../Rating/Rating";
// import arrowBack from "../../assets/images/arrow_back.png"
// import arrowForward from "../../assets/images/arrow_forward.png"


function PreviewHousingProps({title, location, tags}) {
    // console.log(id)
    const listTags = tags.map((tag,index) => (
        // <li key={`${tags}-${index}`}><span>{tag}</span></li>))
        <span key={`${tags}-${index}`}>{tag}</span>))
     
    return (        
        <>           
            <div>
                <h2>{title}</h2>
                <h3>{location}</h3>
                <div>{listTags}</div>                       
            </div>                     
        </>        
    )
}

PreviewHousingProps.propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,  
}

export default PreviewHousingProps
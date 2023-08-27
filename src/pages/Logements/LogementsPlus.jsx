import React from "react";
import Host from "../../components/DescriptionLogement/Host/Host";
import PreviewHousing from "../../components/DescriptionLogement/PresentationLogement/PreviewHousing";
import DropDownHousing from "../../components/DescriptionLogement/DropDownHousing/DropDownHousing";
import Carousel from "../../components/Slide/SlideProps";

function LogementPlus(){
    return(
        <>
            <div class="contener-logement">
                    <Carousel/>
                <div class="card-contener-logement">
                    <PreviewHousing />
                    <Host />      
                    <div class="contener-dropdown-logement">
                    <DropDownHousing/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogementPlus;
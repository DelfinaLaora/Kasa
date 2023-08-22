import Card from "./../../components/Card/Card"
import DefaultPicture from "../../assets/images/accommodation.jpg"

const logements = [
    {
        "title": "Appartement cosy",
        picture: DefaultPicture,
    },
    {
        "title": "Magnifique appartement proche Canal Saint Martin",
        picture: DefaultPicture,
    },
    {
        "title": "Studio de charme - Buttes Chaumont",
        picture: DefaultPicture,
    },
] 

function logement(){
    return(
        <div>
        {logements.map((profile, index) => (
            <Card
                key={`${profile.title}-${index}`}
                title={profile.title}
                picture={profile.picture}
               />

        ))}
        </div>
    )
}

export default logement
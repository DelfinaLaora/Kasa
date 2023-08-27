import {useState, useEffect} from 'react'
// import { useParams } from 'react-router-dom'


export function useFetch(url){
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    // const [id, setId] = useState()
    // const [state, setState] = useState()
    // const [isLoading, setLoading] = useState(true)
    // const { id } = useParams()
useEffect(() => {

    if(!url) return
        async function fetchData(){
            try{
            const response = await fetch(url)
            // parser ce qui est retourné avec data.json()
            const data = await response.json()
            // const jsonResponse = state({id})
            // const {id} = props
            // state interne qui lui permet de stocker la data, 
            // et de savoir si la data est en train de charger 
            // avec isLoading
            setData(data)
            // setId(data.id)
            // setState(jsonResponse)
            // changer l’état de isLoading
            // setLoading(false)            
        }catch(err){
            console.log(err)
            setError(true)
        }
    }
        // le hook fait un return  vide si le paramètre de l’URL est vide, 
        // et commence par mettre isLoading  à true
        // setLoading(true)
        fetchData()  
    }, [url])
    // url  fait partie du tableau de dépendances du useEffect  , 
    // ce qui permettra de redéclencher le call en cas de changement 
    // d’URL passée en paramètre

// return {isLoading, data}
return {data, error}
}











// function useFetch(){
//     const getData = () => {
//         fetch(`http://localhost:3000/annoncesLogements.json`)
//         .then ((response) => response.json())
//         .then((json) => console.log(json))
//     }
//     useEffect(() => {
//         getData()
//     },[])
//     return (
//         <div>

//         </div>
//     })

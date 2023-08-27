import { useParams } from 'react-router-dom'
import Logements from '../../pages/Logements/Logements'
// import LogementPlus from '../../pages/Logements/LogementsPlus'

function LogementContainer() {
  const { id } = useParams()

  return (
    
  <Logements id={id} />
  
  )
}

export default LogementContainer
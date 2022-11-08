
import axios from 'axios'
import { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import {Link} from "react-router-dom"
import homeImg from "../assets/blueHome.png"



function BeerDetails() {
    
    const {beerId} = useParams()
 
  
    const [details, setDetails] = useState(null)
    const [isFetching, setIsFetching] = useState(true)
    console.log("details",details)

    useEffect(() => {
      getData()

    },[])
    const getData = async () => {
try {
    const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
    console.log("response",response)
  
    
    setDetails(response.data)
   
 
    setIsFetching(false)
    
} catch (error) {
    console.log(error)
    
}

    }
    

    if (isFetching === true){
        return <h2>....Buscando</h2>
      }
      
      const filterDetails = details.filter((eachBeer) => {
        if(eachBeer._id === beerId){
          return true
        }else{return false}
      })
     console.log("filterDetails",filterDetails[0])
    // renderizar

  return (
    <div style={{display:"flex", flexDirection:"column",alignItems:"center"}} >
    <nav>
    <Link to="/">
      <img src={homeImg} alt="home  " />
    </Link>
  </nav>
<h4>Beer Details</h4>
<div style={{width:"650px"}}>
  <img src={filterDetails[0].image_url} alt="beer" width="100px" />
  <div style={{display:"flex", justifyContent:"space-between"}}>
     <div>   
       <h2>{filterDetails[0].name}</h2>
        <h4>{filterDetails[0].tagline}</h4>
     </div>
     <div>
        <h2>{filterDetails[0].attenuation_level}</h2>
        <p>{filterDetails[0].first_brewed}</p>
    </div>
  </div>
  <p>{filterDetails[0].description}</p>
  <p>{filterDetails[0].contributed_by}</p>

</div>


    </div>
  )
}

export default BeerDetails

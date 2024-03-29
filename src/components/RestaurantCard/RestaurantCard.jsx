import "./restaurantCard.scss"
import { API, graphqlOperation } from 'aws-amplify'
import { deleteRestaurant } from "../../graphql/mutations"

const RestaurantCard = (props)=>{
  //---------Delete funcionality toggler----------"
  const handleDelete = async()=>{
    try {
      await API.graphql(graphqlOperation(deleteRestaurant, {input: {id: props.id}}))
    } catch (error) {
      console.log(error)
    }
    
  }
  return(
    <div className="restaurant">
    <div className="res-container">
      <img src={props.pix} alt="restaurant"/>
      <div className="text">
      <h3>{props.name}</h3>
      <h4>{props.address}</h4>
      <h4>{props.state}</h4>
      </div>
    </div>
    <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
export default RestaurantCard
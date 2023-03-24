import "./restaurantCard.scss"
const RestaurantCard = (props)=>{
  return(
    <div className="restaurant">
      <img src={props.pix} alt="restaurant"/>
      <div className="text">
      <h3>{props.name}</h3>
      <h4>{props.address}</h4>
      <h4>{props.state}</h4>
      </div>
    </div>
  )
}
export default RestaurantCard
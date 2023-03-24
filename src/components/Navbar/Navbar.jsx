import "./navbar.scss"
import Add from "../Assets/add.png"
import Yelp from "../Assets/yelp.png"
import { Link } from "react-router-dom"
const Navbar = (props)=>{
  return(
    <div className="navbar">
      <div className="left">
      <Link to="/add">
      <img src={Add} alt="add button"/>
      </Link>
      <div className="add-text">
      <span>Add New</span>
      </div>
      </div>
      <div className="middle">
      <Link to="/">
      <img src={Yelp} alt="yelp logo"/>
      </Link>
      </div>
      <div className="right">
      <button onClick={props.out}>Out</button>
      <h3 style={{color:"white", fontSize: "1rem"}}>{props.current.username}</h3>
      </div>
    </div>
  )
}

export default Navbar
import Picture from "../../components/Assets/yp-3.jpg"
import "./register.scss"
import { useState } from "react"
import { API, graphqlOperation } from 'aws-amplify'
import * as mutations from "../../graphql/mutations"

const Register = ()=>{
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [state, setState] = useState("")
  //---------------Adding form Data to AWS---------------
  const addRestaurant = async()=>{
    try {
      if (!name||!address||!state) return
      console.log({
        name: name,
        address: address,
        state: state
      })
      await API.graphql(graphqlOperation(mutations.createRestaurant, {input: {
        name: name,
        address: address,
        state: state
      }}))
    } catch (err) {
      console.log('error creating restaurants:', err)
    }
  }

  //---------------Handling form submission---------------
  const handleSubmit = (e)=>{
    e.preventDefault()
    addRestaurant()
    window.location.href = "/"
  }
  return(
    <div className="single">
      <h1>Add Your Restaurant</h1>
      <div className="form-data">
        <div className="left-form">
          <form onSubmit={handleSubmit}>
            <input onChange={event => setName(event.target.value)} type="text" placeholder="Name"/>
            <input onChange={event => setAddress(event.target.value)} type="text" placeholder="Description"/>
            <input onChange={event => setState(event.target.value)} type="text" placeholder="City"/>
            <button>Submit</button>
          </form>
        </div>
        <div className="right-form">
          <img src={Picture} alt="food"/>
        </div>
      </div>
    </div>
  )
}
export default Register
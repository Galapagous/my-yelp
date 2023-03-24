import Picture from "../../components/Assets/yp-3.jpg"
import "./register.scss"
import { useState } from "react"
import { API, graphqlOperation } from 'aws-amplify'
import { createRestaurant } from "../../graphql/mutations"

const initialState = {name: "", address: "", state: ""}

const Register = ()=>{
  const [formState, setFormState] = useState(initialState)
  
  const setInput = (key, value)=>{
    setFormState({ ...formState, [key]: value })
  }
  //---------------Adding form Data to AWS---------------
  const addRestaurant = async()=>{
    try {
      if (!formState.name || !formState.address || !formState.state) return
      let myrestaurant = { ...formState }
      await API.graphql(graphqlOperation(createRestaurant, {input: myrestaurant}))
      setFormState(initialState)
      myrestaurant = ({})
    } catch (err) {
      console.log('error creating restaurants:', err)
    }
  }

  //---------------Handling form submission---------------
  const handleSubmit = (e)=>{
    e.preventDefault()
    addRestaurant()
  }
  return(
    <div className="single">
      <h1>Add Your Restaurant</h1>
      <div className="form-data">
        <div className="left-form">
          <form onSubmit={handleSubmit}>
            <input onChange={event => setInput('name', event.target.value)} type="text" placeholder="Name"/>
            <input onChange={event => setInput('address', event.target.value)} type="text" placeholder="Address"/>
            <input onChange={event => setInput('state', event.target.value)} type="text" placeholder="State"/>
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
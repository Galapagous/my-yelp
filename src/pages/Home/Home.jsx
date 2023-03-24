import React, {useState, useEffect} from 'react'
import "./home.scss"
import { API, graphqlOperation } from 'aws-amplify'
import SearchBox from '../../components/SearchBox/SerachBox'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import Photo from "../../components/Assets/yp-2.jpg"
import { listRestaurants } from '../../graphql/queries'

const Home = ()=>{
  const [restaurantList, setRestaurantList] = useState([])
  useEffect(() => {
    return () => {
      async function fetchRestaurants() {
        try {
          const restaurantData = await API.graphql(graphqlOperation(listRestaurants))
          const restaurant = restaurantData.data.listRestaurants.items
          setRestaurantList(restaurant)
        } catch (err) { console.log('error fetching restaurant') }
      }
      fetchRestaurants()
    };
  }, [])
  return(
    <div className="home">
    <div className='the-search'>
     <SearchBox/>
    </div>
    <div className='main'>
    {restaurantList.map(each_restaurant=>{
      return(
      <RestaurantCard name = {each_restaurant.name} address = {each_restaurant.address} pix = {Photo} state = {each_restaurant.state}/>
      )
    })}
    </div>
    </div>
  )
}

export default Home
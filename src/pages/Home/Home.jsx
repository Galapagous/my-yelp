import React, {useState, useEffect} from 'react'
import "./home.scss"
import { Amplify, API, graphqlOperation } from 'aws-amplify'
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
    {console.log(restaurantList)}
      <RestaurantCard name = "Musa Breakfast" address = "plot12b industrial estate abule egba" pix = {Photo} state = "Lagos"/>
      <RestaurantCard name = "David Restaurant" address = "No 5 off johnson street 9th mile" pix = {Photo} state = "Enugu"/>
      <RestaurantCard name = "Simbi Dinner" address = "plot 20B bassa road binchi" pix = {Photo} state = "Plateau"/>
      <RestaurantCard name = "Simbi Dinner" address = "plot 7A opp bosso campus" pix = {Photo} state = "Minna"/>
    </div>
    </div>
  )
}

export default Home
import React, {useState, useEffect} from 'react'
import "./home.scss"
import { API, graphqlOperation } from 'aws-amplify'
import SearchBox from '../../components/SearchBox/SerachBox'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import Photo from "../../components/Assets/yp-2.jpg"
import * as queries from '../../graphql/queries';

const Home = ()=>{
  const [restaurantList, setRestaurantList] = useState([])
  useEffect(() => {
    return () => {
      async function fetchRestaurants() {
        try {
          const restaurantData = await API.graphql(graphqlOperation(queries.listRestaurants))
        setRestaurantList(restaurantData.data.listRestaurants.items)
        } catch (err) { console.log('error fetching restaurant') }
      }
      fetchRestaurants()
    };
  }, [restaurantList])
  return(
    <div className="home">
    <div className='the-search'>
     <SearchBox/>
    </div>
    <div className='main'>
    {restaurantList.map(each_res=>{
      return(
        <RestaurantCard key = { each_res.id} name= {each_res.name} address = {each_res.address} state = {each_res.state} pix = {Photo} id = {each_res.id} />
      )
    })}
    </div>
    </div>
  )
}

export default Home
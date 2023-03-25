import "./searchbox.scss"
import {useState} from "react"

const SearchBox = ()=>{
  const [soon, setSoon] = useState(false)
  const handleSearch = (e)=>{
    e.preventDefault()
    setSoon(true)
  }
  return(
    <div className="searchBox">
    {soon ? <div className="soon">
      <h1>Coming Soon</h1>
      <p>Sorry this functionality is not yet implemented</p>
    </div> : <div><h1>Search</h1></div>}
    <form onSubmit={handleSearch}>
      <input type="text" placeholder="Find 'dinner'"/>
      <input type="text" placeholder="Near 'texas'"/>
      <button>Let's Go</button>
    </form>
    <hr/>
    <div className="latest">

    <h4>Latest Search</h4>
    <ul>
      <li>Reataurant - New York</li>
      <li>Bar - Abule egba</li>
      <li>Breakfast - Paris</li>
    </ul>
    </div>
    </div>
  )
}

export default SearchBox
import "./searchbox.scss"
const SearchBox = ()=>{
  const handleSearch = (e)=>{
    e.preventDefault()
    alert("search requested")
  }
  return(
    <div className="searchBox">
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
export function Searchbar({location, setLocation, searchLocation}){
  return(
    <div className="search">
      <input 
        value={location}
        onChange={e => setLocation(e.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="search"
      />
    </div>
  )
}
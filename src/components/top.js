export function Top({data}){
  return(
    <div className="top">
      <div className="location">
        <p>{data.name}</p>
      </div>
      <div className="temp">
        {data.main ? <h1>{Math.round(data.main.temp)}°C</h1> : null}
      </div>
      <div className="description">
        {data.weather? <p>{data.weather[0].main}</p>: null}
      </div>
    </div>
  )
}
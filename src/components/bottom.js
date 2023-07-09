export function Bottom({data}){
  return(
    <div className="bottom">
      <div className="feels">
        {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°C</p> : null}
        <p>Feels like</p>
      </div>
      <div className="humidity">
        {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
        <p>Humidity</p>
      </div>
      <div className="wind">
        {data.wind ? <p className="bold">{((data.wind.speed)*3.6).toFixed(1)}km/h</p> : null}
        <p>Wind Speed</p>
      </div>
    </div>
  )
}
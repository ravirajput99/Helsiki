import axios from 'axios'
import { useEffect, useState } from 'react'
import CountryData from './component/CountryData'
const api_key = import.meta.env.VITE_SOME_KEY
function App() {
  const [value, setValue] = useState('')
  const [listCountries, setListCountries] = useState([])
  const [allCountries, setAllCountries] = useState([])
  const [showCountry, setShowCountry] = useState({})
  useEffect(() => {
    axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`).then(response => setAllCountries(response.data))
  }, [])
  useEffect(() => {
    if (Object.keys(showCountry).length > 0)
      axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${showCountry.latlng[0]}&lon=${showCountry.latlng[1]}&appid=${api_key}`)
  }, [showCountry])
  const handleChange = (event) => {
    setValue(event.target.value)
    const list = allCountries.filter(country => country.name.common.toLowerCase().includes(event.target.value.toLowerCase()))
    setListCountries(list)
    if (list.length === 0) {
      setShowCountry({})
    }
  }

  return (
    <div>
      <label>finds countries</label>
      <input type='text' value={value} onChange={handleChange} />
      {listCountries.length > 10 && 'Too many matches, specify any other filter'}
      {listCountries.length <= 10 && listCountries.length > 1 && listCountries.map(country => <p key={country.name.common}>{country.name.common}<button onClick={() => setShowCountry(country)}>show</button></p>)}
      {(listCountries.length === 1 ? listCountries : Object.keys(showCountry).length ? [showCountry] : []).map(country =>
        <CountryData key={country.name.common} country={country} />
      )

      }

    </div>
  )
}

export default App

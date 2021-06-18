import React, {useState, useEffect} from 'react'

function Ajax() {
  const [country, setCountry] = useState([])
  const [value, setValue] = useState('')

  const countries = async () => {
    const world = await fetch("https://restcountries.eu/rest/v2/all")
    const count = await world.json()
    setCountry(count)
    console.log(count);
  }

  useEffect(() => {
    countries()
  }, [])
    
  const filteredCountries = country.filter(country => {
    return country.name.toLowerCase().includes(value.toLowerCase())
  })
    

    return ( 
    <div className = "country">
      <div className="container country__content" >
        <input type="search" className="country__content-input" onChange={(event)=>setValue(event.target.value)} placeholder="Search"/>
        <ul className="country__list" > 
          {filteredCountries.map((el, index) =>
                    
        <li key={index} className="country__list-name" >
          <img src = {el.flag} alt={el.name} className="country__list-flag"/>
          <span className="country__list-span">
            {el.name} 
          </span>
        </li>)}
      </ul>
    </div>
  </div>)
}
export default Ajax
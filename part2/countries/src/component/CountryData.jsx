import React from 'react'

function CountryData({ country }) {
    return (
        <div>
            <h1>{country.name.common}</h1>
            {country.capital.map(capital => <p>Capital:{capital}</p>)}
            <p>Area {country.area}</p>
            <h1>Languages</h1>
            <ul>{Object.values(country.languages).map(language => <li>{language}</li>)}</ul>
            <img src={country.flags.png} alt='flag' />
        </div>
    )
}

export default CountryData
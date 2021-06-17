import React from 'react'

const Data = ({p, cases, vax, hos, icu}) => {
    return(
      <div>
        <p>Total population: {p}</p>
        <p>Total cases: {cases}</p>
        <p>Number of people vaccinated: {vax}</p>
        <p>Percentage of vaccinated: {Math.round(vax / p * 1000) / 10}%</p>
        <p>Number of people hospitalized(Covid): {hos}</p>
        <p>Number of people in ICU(Covid): {icu}</p>
      </div>
    )
}

export default Data
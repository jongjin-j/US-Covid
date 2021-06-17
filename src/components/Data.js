import React from 'react'

const Data = ({p, cases, vax}) => {
    return(
      <div>
        <p>Total population: {p}</p>
        <p>Active cases: {cases}</p>
        <p>Number of people vaccinated: {vax}</p>
      </div>
    )
}

export default Data
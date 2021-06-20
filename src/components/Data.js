import React from 'react'

const Data = ({state, p, cases, death, vax, hos, icu}) => {
    return(
      <div>
        <h3>{state}</h3>
        <p>Total cases: {cases}</p>
        <p>Deaths: {death}</p>
        <p>Percentage vaccinated: {Math.round(vax / p * 1000) / 10}%</p>
        <p>Hospitalized(Covid): {hos + icu}</p>
      </div>
    )
}

export default Data
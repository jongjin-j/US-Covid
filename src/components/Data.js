import React from 'react'

const Data = ({p, cases, death, vax, hos, icu}) => {
    return(
      <div>
        <p>Total cases: {cases}</p>
        <p>Deaths: {death}</p>
        <p>Percentage of vaccinated: {Math.round(vax / p * 1000) / 10}%</p>
        <p>Total number of people hospitalized(Covid): {hos + icu}</p>
      </div>
    )
}

export default Data
import '../App.css'
import covidService from '../services/covidData'
import React, { useEffect, useState } from 'react'
import Data from '../components/Data'

function Aggregate() {
    const baseURL = 'https://api.covidactnow.org/v2/country/US.json?apiKey=d544d096cb08454ca99717745e489f14'
    
    const [population, setPopulation] = useState(0)
    const [death, setDeath] = useState(0)
    const [numOfCases, setnumOfCases] = useState(0)
    const [numOfVax, setnumOfVax] = useState(0)
    const [hospitalization, setHospitalization] = useState(0)
    const [icu, setIcu] = useState(0)

    useEffect(() => {
        covidService
          .getData(baseURL)
          .then(response => {
            setPopulation(response.population)
            setDeath(response.actuals.deaths)
            setnumOfCases(response.actuals.cases)
            setnumOfVax(response.actuals.vaccinationsCompleted)
            setHospitalization(response.actuals.hospitalBeds.currentUsageCovid)
            setIcu(response.actuals.icuBeds.currentUsageCovid)
          })
      }, [])

    return (
        <div className = "title">
            <h1 className = "title">U.S. Aggregate</h1>
            <br/>
            <Data p = {population} cases = {numOfCases} death = {death} vax = {numOfVax} hos = {hospitalization} icu = {icu}/>
        </div>
    )
}

export default Aggregate

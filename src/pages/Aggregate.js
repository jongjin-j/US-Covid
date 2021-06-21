import '../App.css'
import '../components/Chart.css'
import covidService from '../services/covidData'
import React, { useEffect, useState } from 'react'
import SingleData from '../components/singleState/SingleData'
import SingleChart from '../components/singleState/SingleChart'

function Aggregate() {
    const baseURL = 'https://api.covidactnow.org/v2/country/US.json?apiKey=d544d096cb08454ca99717745e489f14'
    
    const [population, setPopulation] = useState(0)
    const [death, setDeath] = useState(0)
    const [numOfCases, setnumOfCases] = useState(0)
    const [numOfVax, setnumOfVax] = useState(0)
    const [newCases, setNewCases] = useState(0)
    const [newDeaths, setNewDeaths] = useState(0)
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
            setNewCases(response.actuals.newCases)
            setNewDeaths(response.actuals.newDeaths)
            setHospitalization(response.actuals.hospitalBeds.currentUsageCovid)
            setIcu(response.actuals.icuBeds.currentUsageCovid)
          })
      }, [])

    return (
        <div className = "title">
            <br/>
            <h1 className = "title">U.S. Aggregate</h1>
            <br/>
          <div className = "card3">
            <SingleData cases = {numOfCases} death = {death} newCases = {newCases} newDeaths = {newDeaths}/>
          </div>
          <SingleChart p = {population} vax = {numOfVax} hos = {hospitalization} icu = {icu}/>
        </div>
    )
}

export default Aggregate

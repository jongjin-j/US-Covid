import '../App.css'
import covidService from '../services/covidData'
import React, { useEffect, useState } from 'react'
import Data from '../components/Data'
import Form from '../components/Form'

function SingleState() {

    const baseURL = 'https://api.covidactnow.org/v2/state/'
    const nextURL = '.json?apiKey=d544d096cb08454ca99717745e489f14'
  
    const [state, setState] = useState('MA')
    const [population, setPopulation] = useState(0)
    const [numOfCases, setnumOfCases] = useState(0)
    const [numOfVax, setnumOfVax] = useState(0)
    const [hospitalization, setHospitalization] = useState(0)
    const [icu, setIcu] = useState(0)
  
    useEffect(() => {
      covidService
        .getData(baseURL + state + nextURL)
        .then(response => {
          setPopulation(response.population)
          setnumOfCases(response.actuals.cases)
          setnumOfVax(response.actuals.vaccinationsCompleted)
          setHospitalization(response.actuals.hospitalBeds.currentUsageCovid)
          setIcu(response.actuals.icuBeds.currentUsageCovid)
        })
    }, [state])
  
    const handleStateChange = (event) => {
      setState(event.target.value)
    }

    //console.log(`population: ${population} cases: ${numOfCases} vax: ${numOfVax}`)
  
    return (
      <div>
        <div>
          <h1 className = "App">Covid in {state}</h1>
          <Form state = {state} handler = {handleStateChange}/>
        </div>
        <div>
          <Data p = {population} cases = {numOfCases} vax = {numOfVax} hos = {hospitalization} icu = {icu}/>
        </div>
      </div>
    );
  }
  
  export default SingleState;

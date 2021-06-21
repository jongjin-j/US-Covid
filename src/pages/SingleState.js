import '../App.css'
import '../components/Chart.css'
import covidService from '../services/covidData'
import React, { useEffect, useState } from 'react'
import Form from '../components/Form'
import SingleData from '../components/singleState/SingleData'
import SingleChart from '../components/singleState/SingleChart'


function SingleState() {

    const baseURL = 'https://api.covidactnow.org/v2/state/'
    const nextURL = '.json?apiKey=d544d096cb08454ca99717745e489f14'
  
    const [state, setState] = useState('MA')
    const [population, setPopulation] = useState(0)
    const [deaths, setDeaths] = useState(0)
    const [newCases, setNewCases] = useState(0)
    const [newDeaths, setNewDeaths] = useState(0)
    const [numOfCases, setnumOfCases] = useState(0)
    const [numOfVax, setnumOfVax] = useState(0)
    const [hospitalization, setHospitalization] = useState(0)
    const [icu, setIcu] = useState(0)
  
    useEffect(() => {
      covidService
        .getData(baseURL + state + nextURL)
        .then(response => {
          setPopulation(response.population)
          setDeaths(response.actuals.deaths)
          setnumOfCases(response.actuals.cases)
          setNewCases(response.actuals.newCases)
          setNewDeaths(response.actuals.newDeaths)
          setnumOfVax(response.actuals.vaccinationsCompleted)
          setHospitalization(response.actuals.hospitalBeds.currentUsageCovid)
          setIcu(response.actuals.icuBeds.currentUsageCovid)
        })
    }, [state])
  
    const handleStateChange = (event) => {
      setState(event.target.value)
    }
  
    return (
      <div>
        <div>
          <br/>
          <h1 className = "title">Covid in {state}</h1>
          <br/>
          <Form className = "dropDown" state = {state} handler = {handleStateChange} status = "State: "/>
        </div>
        <div>
          <SingleData cases = {numOfCases} death = {deaths} newCases = {newCases} newDeaths = {newDeaths}/>
        </div>
        <SingleChart p = {population} vax = {numOfVax} hos = {hospitalization} icu = {icu}/>
      </div>
    );
  }
  
  export default SingleState;

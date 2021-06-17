import './App.css';
import covidService from './services/covidData'
import React, { useEffect, useState } from 'react'

const Data = ({p, cases, vax}) => {
  return(
    <div>
      <p>Total population: {p}</p>
      <p>Active cases: {cases}</p>
      <p>Number of people vaccinated: {vax}</p>
    </div>
  )
}


function App() {

  const baseURL = 'https://api.covidactnow.org/v2/state/'
  const nextURL = '.json?apiKey=d544d096cb08454ca99717745e489f14'

  const [state, setState] = useState('MA')
  const [population, setPopulation] = useState(0)
  const [numOfCases, setnumOfCases] = useState(0)
  const [numOfVax, setnumOfVax] = useState(0)
  //const [stateData, setStateData] = useState([])

  useEffect(() => {
    covidService
      .getData(baseURL + state + nextURL)
      .then(response => {
        //setStateData(response)
        setPopulation(response.population)
        setnumOfCases(response.actuals.cases)
        setnumOfVax(response.actuals.vaccinationsCompleted)
      })
  }, [state])

  const handleStateChange = (event) => {
    setState(event.target.value)
  }


  return (
    <div>
      <div className = "App">
        <h1>US covid</h1>
        <form>
          <label>
            <select value = {state} onChange = {handleStateChange}>
              <option>MA</option>
              <option>TX</option>
            </select>
          </label>
        </form>
      </div>
      <div>
        <Data p = {population} cases = {numOfCases} vax = {numOfVax}/>
      </div>
    </div>
  );
}

export default App;

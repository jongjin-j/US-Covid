import '../App.css'
import covidService from '../services/covidData'
import React, { useEffect, useState } from 'react'
import Data from '../components/Data'
import Form from '../components/Form'

function CompareStates() {
    const baseURL = 'https://api.covidactnow.org/v2/state/'
    const nextURL = '.json?apiKey=d544d096cb08454ca99717745e489f14'
  
    const [state_1, setState_1] = useState('MA')
    const [population_1, setPopulation_1] = useState(0)
    const [numOfCases_1, setnumOfCases_1] = useState(0)
    const [numOfVax_1, setnumOfVax_1] = useState(0)
    const [hospitalization_1, setHospitalization_1] = useState(0)
    const [icu_1, setIcu_1] = useState(0)

    const [state_2, setState_2] = useState('NY')
    const [population_2, setPopulation_2] = useState(0)
    const [numOfCases_2, setnumOfCases_2] = useState(0)
    const [numOfVax_2, setnumOfVax_2] = useState(0)
    const [hospitalization_2, setHospitalization_2] = useState(0)
    const [icu_2, setIcu_2] = useState(0)
  
    useEffect(() => {
      covidService
        .getData(baseURL + state_1 + nextURL)
        .then(response => {
          setPopulation_1(response.population)
          setnumOfCases_1(response.actuals.cases)
          setnumOfVax_1(response.actuals.vaccinationsCompleted)
          setHospitalization_1(response.actuals.hospitalBeds.currentUsageCovid)
          setIcu_1(response.actuals.icuBeds.currentUsageCovid)
        })
    }, [state_1])

    useEffect(() => {
        covidService
          .getData(baseURL + state_2 + nextURL)
          .then(response => {
            setPopulation_2(response.population)
            setnumOfCases_2(response.actuals.cases)
            setnumOfVax_2(response.actuals.vaccinationsCompleted)
            setHospitalization_2(response.actuals.hospitalBeds.currentUsageCovid)
            setIcu_2(response.actuals.icuBeds.currentUsageCovid)
          })
      }, [state_2])
  
    const handleStateChange_1 = (event) => {
      setState_1(event.target.value)
    }

    const handleStateChange_2 = (event) => {
        setState_2(event.target.value)
    }



    //console.log(`population: ${population} cases: ${numOfCases} vax: ${numOfVax}`)
  
    return (
      <div>
        <div>
          <h1 className = "App">Compare Two States</h1>
          <div>
            <Form state = {state_1} handler = {handleStateChange_1}/>
            <Form state = {state_2} handler = {handleStateChange_2}/>
          </div>
          
        </div>
        <div>
          <Data p = {population_1} cases = {numOfCases_1} vax = {numOfVax_1} hos = {hospitalization_1} icu = {icu_1}/>
          <Data p = {population_2} cases = {numOfCases_2} vax = {numOfVax_2} hos = {hospitalization_2} icu = {icu_2}/>
        </div>
      </div>
    );
}

export default CompareStates
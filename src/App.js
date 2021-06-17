import './App.css';
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SingleState from './pages/SingleState'
import CompareStates from './pages/CompareStates'
import Aggregate from './pages/Aggregate'
import Source from './pages/Source'
import Navbar from './components/Navbar'


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path = '/' exact component = {SingleState}/>
          <Route path = '/compare' component = {CompareStates}/>
          <Route path = '/aggregate' component = {Aggregate}/>
          <Route path = '/source' component = {Source}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

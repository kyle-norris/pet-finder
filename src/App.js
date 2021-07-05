import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PetDetailsPage from './pages/PetDetailsPage'
import 'semantic-ui-css/semantic.min.css'

function App () {
  return (
    <>
    <Router basename="/pet-finder">
      <Route exact path="/" component={HomePage} />
      <Route path="/pet/:petID" component={PetDetailsPage} />
    </Router>
    </>
  )
}

export default App

import React from 'react'
import './App.css'
import Layout from './Layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router basename="https://netflix-clone-six-zeta.vercel.app/">
      <Switch>
        <Route path="/" exact component={Layout} />
      </Switch>
    </Router>
  )
}

export default App

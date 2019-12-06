import React from 'react'
import Problem31 from './Problem 31/Problem31'
import {HashRouter, Route, Redirect} from 'react-router-dom'

// Using client side routing with React-router-dom

class App extends React.Component {
  render () {
    return (
      <HashRouter>
        <h1>Welcome to the mathematical bender that is Project Euler</h1>
        <br></br>
        <p>Leonhard you bastard! How'd you solve these problems back in your day?</p>
        <Redirect strict from="/" to="/31" />
        <Route exact path="/31" component={Problem31} />
      </HashRouter>
    )
  }
}

export default App

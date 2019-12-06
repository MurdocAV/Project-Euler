import React from 'react'
import Problem31 from './Problem 31/Problem31'
import {HashRouter, Route, Redirect} from 'react-router-dom'

// Using client side routing with React-router-dom

class App extends React.Component {
  render () {
    return (
      <HashRouter>
        <Redirect strict from="/" to="/31" />
        <Route exact path="/31" component={Problem31} />
      </HashRouter>
    )
  }
}

export default App

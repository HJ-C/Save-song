import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './routes'

function App() {

  return (
    <Router>
      <div className='App'>
        <Navbar></Navbar>
        <div className='container'>
          <Switch>
            {routes.map( route => { 
              return(
                <Route path={route.path} exact key={route.path}>
                  <route.component/>
                </Route>
              )
            })}
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;

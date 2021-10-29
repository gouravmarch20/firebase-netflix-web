import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Browse, SignIn, SignUp } from './pages'
import * as ROUTES from './constants/routes'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/browse' exact>
          <Browse />
        </Route>
        {/*
        <Route path='/signin' exact>
          <SignIn />
        </Route>
        <Route path='/signup' exact>
          <Signup />
        </Route>
         */}
        <Route path={ROUTES.HOME} exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

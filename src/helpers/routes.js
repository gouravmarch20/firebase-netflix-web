import React from 'react'
import { Route, Redirect } from 'react-router-dom'
// if user = null / empty --> signin
export function IsUserRedirect ({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath
              }}
            />
          )
        }

        return null
      }}
    />
  )
}

export function ProtectedRoute ({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: 'signin',
                state: { from: location }
              }}
            />
          )
        }

        return null
      }}
    />
  )
}

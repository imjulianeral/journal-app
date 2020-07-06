import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from '@reach/router'

function PrivateRoute({ isAuth, component: Component, ...rest }) {
  if (!isAuth) return <Redirect to="/auth" noThrow />
  return <Component {...rest} />
}

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
}

export default PrivateRoute

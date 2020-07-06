import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from '@reach/router'

function PublicRoute({ isAuth, component: Component, ...rest }) {
  if (!isAuth) return <Component {...rest} />
  return <Redirect to="/" noThrow />
}

PublicRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
}

export default PublicRoute

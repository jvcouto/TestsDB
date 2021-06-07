import { Route, Redirect } from 'react-router-dom'
import React from 'react'
import Proptypes from 'prop-types'

export default function PrivateRoute({
    component: Component,
    isprivate,
    ...rest
}) {
    const signed = false
    if (!signed && isprivate) {
        return (<Redirect to="/" />)
    }

    if (signed && !isprivate) {
        return (<Redirect to="profile" />)
    }

    return (<Route {...rest} component={Component} />)
}



PrivateRoute.propTypes = {
    isprivate: Proptypes.bool,
    component: Proptypes.oneOfType([Proptypes.element, Proptypes.func]).isRequired
}

PrivateRoute.defaultProps = {
    isprivate: false
} 
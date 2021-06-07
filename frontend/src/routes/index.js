import { Switch } from 'react-router-dom'
import React from 'react'
import PrivateRoute from './PrivateRoute'

import signup from '../pages/signup'
import signin from '../pages/signin'
import profile from '../pages/profile'
import update from '../pages/update'


export default function Routes() {
    return (
        <Switch>
            <PrivateRoute path="/" exact component={signin} />
            <PrivateRoute path="/profile" component={profile} isprivate />
            <PrivateRoute path="/update" component={update} isprivate />
            <PrivateRoute path="/signup" component={signup} />
        </ Switch>
    )
}
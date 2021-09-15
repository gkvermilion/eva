import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import {publicRoutes} from "../routes";

const AppRouter = () => {
    const isAuth = false
    return (
        <Switch>
            {publicRoutes.map(({path, component}) =>
            <Route key={path} path={path} component={component} exact/>
            )}
        </Switch>
    )
}

export default AppRouter;
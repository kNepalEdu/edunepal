import React from 'react';
import { StateMachineProvider } from 'little-state-machine';
import { Route } from 'react-router-dom';



const appRoutes = ({ component: Component, path, isPrivate, sidebar, ...rest }) => {
  return (
    <StateMachineProvider>
        <Route 
            path={path}
            render = {(props) => <Component {...props} /> }
            { ...rest }
        />
    </StateMachineProvider>
    
  )
}

export default appRoutes
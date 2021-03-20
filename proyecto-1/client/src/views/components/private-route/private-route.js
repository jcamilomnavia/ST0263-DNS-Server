import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ render, isConnected, ...rest }) => (
  <Route
    {...rest}
    render={(otherProps) =>
      isConnected === true ? (
        render(otherProps)
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: otherProps.location },
          }}
        />
      )
    }
  />
);

export default PrivateRoute;

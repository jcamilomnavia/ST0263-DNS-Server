import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ render, isConnected, ...rest }) => (
  <Route
    {...rest}
    render={(otherProps) =>
      isConnected === false ? (
        render(otherProps)
      ) : (
        <Redirect
          to={{
            pathname: '/room',
            state: { from: otherProps.location },
          }}
        />
      )
    }
  />
);

export default PublicRoute;

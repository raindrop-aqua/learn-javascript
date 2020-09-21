import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import UnauthModel from "../../features/auth/UnauthModel";

export default function PrivateRoute({
  component: Component,
  prevLocation,
  ...rest
}) {
  const { authenticated } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? <Component {...props} /> : <UnauthModel {...props} />
      }
    />
  );
}

import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      Ooooopsssssss ! Something went wrong
      <h4>{err.status}</h4>
      <h4>{err.statusText}</h4>
    </div>
  );
};

export default Error;

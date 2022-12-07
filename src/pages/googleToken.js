import * as React from "react";
import {
  BrowserRouter as useParams,
} from "react-router-dom";

export default function Test() {
  const { token } = useParams();

  return (
    <div>
      <h1>{token}</h1>
    </div>
  );
}
import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";

export default function Test() {
  const { token } = useParams();
  let navigate = useNavigate();
  localStorage.setItem("token", token);
  navigate('/datauser')
  return (
    <div>
    </div>
  );
}
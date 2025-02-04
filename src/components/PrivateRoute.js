import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({component:Component, ...rest}){
  
  if(localStorage.getItem('token')){
    return <Route {...rest} component={Component}/>
  }else{
  return (<Redirect to="/login" />);
  }
}

export default PrivateRoute;

//Task List:
//1. Complete PrivateRoute
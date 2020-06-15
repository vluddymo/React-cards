import React from "react";
import './MainContent.css'

export default function (props){
  return(
      <main className="MainContent">{props.children}</main>
  )
}
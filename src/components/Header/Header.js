import React from "react";
import './Header.css'

export default function Header(props){
  return  (
      <header className="Header"><h1>{props.children}</h1></header>
  )
}

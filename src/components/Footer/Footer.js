import React from "react";
import './Footer.css'

export default function Footer(props){
  return  (
      <footer><h5>{props.children}</h5></footer>
  )
}
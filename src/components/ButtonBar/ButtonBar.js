import React from "react";
import "./ButtonBar.css"

export default function ButtonBar(props) {
  return (
      <div className="buttonBar">
        <button onClick={props.bear}>Bear me</button>
        <button onClick={props.penguin}>Peng, Peng, Penguin</button>
        <button onClick={props.fox}>What the fox</button>
      </div>
  );
}
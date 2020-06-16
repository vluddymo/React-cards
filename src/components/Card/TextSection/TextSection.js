import React from "react";
import './TextSection.css'

export default function TextSection(props) {
  return (
      <section className="TextSection" >
        <h2>{props.title}</h2>
        <p>{props.text}
        </p>
      </section>
  );

}
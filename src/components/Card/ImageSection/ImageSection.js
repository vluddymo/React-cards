import React from "react";
import './ImageSection.css'

export default function ImageSection(props) {
  return (
      <section className="ImageSection">
        <img className="Image" src={props.imgContent} alt="Happy penguin in the snow "/>
      </section>
  );

}
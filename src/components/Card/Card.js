import React from "react";
import './Card.css';
import TextSection from "./TextSection/TextSection";
import ImageSection from "./ImageSection/ImageSection";

export default function Card(){
  return (
      <article className="Card">
        <TextSection></TextSection>
        <ImageSection></ImageSection>
      </article>
  )
}
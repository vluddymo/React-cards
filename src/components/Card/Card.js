import React from "react";
import './Card.css';
import TextSection from "./TextSection/TextSection";
import ImageSection from "./ImageSection/ImageSection";

export default function Card(props){
  return (
      <article className="Card">
        <TextSection title={props.cardContent.title} text={props.cardContent.text}></TextSection>
        <ImageSection imgContent={props.cardContent.imgSource}></ImageSection>
      </article>
  )
}
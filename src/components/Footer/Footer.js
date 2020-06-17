import React from "react";
import './Footer.css'
import NewsletterForm from "./NewsletterForm/NewsletterForm";

export default function Footer(props) {
  return (
      <footer className="Footer">
        <h3>{props.children}</h3>
        <NewsletterForm></NewsletterForm>
      </footer>
  )
}
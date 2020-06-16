import React from "react";
import './Footer.css'
import NewsletterForm from "./NewsletterForm/NewsletterForm";

export default function Footer(props) {
  return (
      <footer className="Footer">
        <h4>{props.children}</h4>
        <NewsletterForm></NewsletterForm>
      </footer>
  )
}
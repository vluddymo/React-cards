import React from "react";
import "./NewsletterForm.css";

export default function NewsletterForm() {

  const [email, setEmail] = React.useState("")

  function handleChange(event) {
    const value = event.target.value;
    setEmail(value);

  }

  return(
      <form className="form">
        <label htmlFor="email">Get the Newsletter now !</label>
        <input id="email" value={email} onChange={handleChange} placeholder="myEmail@myProvider.com" type="text"/>
        <button className="submit" type="submit" >submit</button>
      </form>
  );

}
import React from "react";
import "./NewsletterForm.css";

export default function NewsletterForm() {

  const [email, setEmail] = React.useState("")
  const [name, setName] = React.useState("")

  function handleChange(event) {
    const value = event.target.value;
    return setEmail(value);
  }

  function handleChange2(event) {
    const value = event.target.value;
    return setName(value);
  }

  function buildDataPackage(event){
    event.preventDefault();
    let data = {
      name: `${name}`,
      email: `${email}`
    };
    return console.log(data)
  }



  return(
      <form className="form">
        <label htmlFor="email">Get the Newsletter now !</label>
        <input  id="email" onChange={handleChange2} value={name} type="text" placeholder="Max Mustermann"/>
        <input  onChange={handleChange} value={email} placeholder="myEmail@myProvider.com" type="text"/>
        <button className="submit" type="submit" onClick={buildDataPackage}>submit</button>
      </form>
  );

}
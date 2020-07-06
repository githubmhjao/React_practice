import React, { useState } from "react";
import "./styles.css";

export default function App() {

  const initFormData = {firstName: "", lastName: "", textArea: ""}

  const [formData, setFormData] = useState(initFormData)

  function handleChange(event) {
    console.log("Change!")
    const {name, value} = event.target
    setFormData(prevState => ({...prevState, [name]: value}))
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <form>
        <input type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
        <br />
        <input type="text" placeholder="Last Name"  name="lastName" value={formData.lastName} onChange={handleChange} />
        <br />
        <textarea cols="15" rows="3" placeholder="Textarea" name="textArea" value={formData.textArea} onChange={handleChange} />
      </form>
    </div>
  );
}

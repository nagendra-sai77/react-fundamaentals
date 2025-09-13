import Product from "./Product.jsx"

import "./App.css"
import { useState } from "react"



function App() {
  const [count, setCount] = useState(0)
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const handleEmail =(e)=>{
    setEmail(e.target.value)
  }
  const handlePassword =(e)=>{
    setPassword(e.target.value)
  }
  const handleClick = (name) => {
    console.log("Button clicked")
    alert(name)
  }
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }
  const handleSubmit = (e) => {
   
    e.preventDefault()
    alert(`email: ${formData.email} \npassword: ${formData.password}`)
  }
  const handleIncrerement = () => {
    setCount((prevCount )=> prevCount + 1)
    console.log(count)
  }
  const[formData , setFormData] = useState({
    email : "",
    password : ""
  })
  

  return (
    <div>
      <p>{count}</p>
      
      <button onClick={handleIncrerement}>increment</button>
      <form onSubmit={handleSubmit} >
      <input type="text" name="email" placeholder="Email" onChange={handleChange}/>
      <input type="password"  name="pass" placeholder="pass" onChange={handleChange}/>
      <button type="submit">submit</button>
      </form>
    </div>





  )
}

export default App

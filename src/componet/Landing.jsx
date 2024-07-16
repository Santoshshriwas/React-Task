import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import "../css/Landing.css"
const Landing = () => {
const nav=useNavigate();
const [form,setForm]=useState({
  email:"",
  password:""
})

const setval= (e)=>{
  const {name,value}= e.target;
  setForm({
    ...form,
    [name]:value
  })
}

const LoginUser = async(e)=>{
  e.preventDefault();
  try {
    await axios.post("https://reqres.in/api/login",form).then(res=>{
      console.log(res.data);
      localStorage.setItem("token",res.data.token);
      nav("/home")
      form({
        email:"",
        password:""
      })
    })
  } catch (error) {
    console.error(error);
    alert(error.response.data.error)
  }
}

  return (
    <>
      <form onSubmit={LoginUser}>
        <h1>Login</h1>
        <input type="email"  className='card' name="email" value={form.email} onChange={setval 
        } placeholder="Enter Email" required/><br/><br/>
        <input type="password" 
        className='card' 
        name="password" value={form.password} onChange={setval
        } placeholder="Enter Password" required/><br/><br/>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Landing
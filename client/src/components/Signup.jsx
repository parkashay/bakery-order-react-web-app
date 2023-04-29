import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './signup.css'

function Signup() {

  const routeSignup = process.env.REACT_APP_CREATE_USER;
  
  const [formData, setFormData] = useState({fullName:"", email:"", password:"", confirmPassword:""})
  const [userData, setUserData] = useState({name: "", email: "", password: ""});
 
 
 useEffect(() => {
  setUserData({
    name : formData.fullName,
    email: formData.email,
    password : formData.password
  })
 }, [formData])

  //to handle the form data after submit
  const handleSubmit = async (event) => {
    
    event.preventDefault();

    if(formData.password !== formData.confirmPassword){
      alert("passwords do not match")
      return;
    }
    else{
      
      const response = await fetch(routeSignup, { //send data to backend
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name : userData.name,
          email : userData.email,
          password : userData.password
        })
      })
      const data = await response.json();
      if(!data.success){
        alert("Email already registered.")
      }
      else{
        localStorage.setItem('rimhasLoggedIn', true)
        localStorage.setItem('loggedInName', formData.fullName)
        window.location.href = "/";
        alert("Welcome to Rimhas, "+ formData.fullName)
      }
    }
  }



  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value})

     
  }
  return (
    <div className='signup-container'>
      <form onSubmit={handleSubmit} className='signup-form'>
        <label className='fields'>
          <span>Full Name:</span>
          <input type="text"  name='fullName' value={formData.fullName} onChange={handleChange} className='txt-input' required />
        </label>
        <label className='fields'>
          <span>Email:</span>
          <input type="email" name='email' value={formData.email} onChange={handleChange} className='txt-input' required />
        </label>
        <label className="fields">
          <span>Password:</span>
          <input type="password" name='password' value={formData.password} onChange={handleChange} className='txt-input' required />
        </label>
        <label className="fields">
          <span>Confirm Password:</span>
          <input type="password" name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} className='txt-input' required/>
        </label>
        <button type="submit" className='submit-button'>SignUp</button>
      </form>
      <div className="divider"></div>
      <div>
        Already a user? 
        <Link to='/login' className='signup-link'>Login</Link>
      </div>
    </div>
  )
}

export default Signup
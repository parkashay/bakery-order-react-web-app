import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './signup.css'

function Signup() {
  const [formData, setFormData] = useState({fullName:"", email:"", password:"", confirmPassword:""})
  const handleSubmit = (event) => {
    
    event.preventDefault();
    if(formData.password !== formData.confirmPassword){
      alert("passwords do not match")
      return
    }
    else{
      console.log('do some shit')
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
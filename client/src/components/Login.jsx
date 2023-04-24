import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

function Login() {
    const lol = () => {
        localStorage.removeItem('rimhasLoggedIn')
        console.log(localStorage)
    }
    return (
        <div className='login-container'>
            <div className="brand-container">
                <div className="brand" onClick={()=>lol()}>
                    Rimhas
                </div>
            </div>
            <form className="login-form" action='/logindata' method='POST'>
                <label className='fields'>
                    <span>Email:</span>
                    <input type="email" className='txt-input' placeholder='example@gmail.com' />
                </label>
                <label className='fields'>
                    <span>Password:</span>
                    <input type="password" className='txt-input' />
                </label>
                <button type="submit"  className='submit-button'>Login</button>
                <div className="divider"></div>
               <div>
                Not a user?
               <Link to='/signup' className='signup-link'>Signup</Link>
               </div>
            </form>
        </div>
    )
}

export default Login
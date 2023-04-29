import React, { useEffect, useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'

function Login() {
    
    const routeLogin = process.env.REACT_APP_LOGIN_USER
    
    const [loginData, setLoginData] = useState({ email: "", password: "" })
    const [userData, setUserData] = useState({ email: "", password: "" })

    useEffect(() => {
        setUserData({
            email: loginData.email,
            password: loginData.password
        })
    }, [loginData])

    const handleChange = (e) => {
        const { name, value } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (userData.email.length !== 0 && userData.password.length !== 0) {
            const response = await fetch(routeLogin, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: userData.email,
                    password: userData.password
                })
            })
            const data = await response.json()
            if(data.success){
                localStorage.setItem('rimhasLoggedIn', true);
                localStorage.setItem('loggedInName', data.name);
                if(!data.isAdmin){
                    window.location.href = '/'
                }
                else{
                    localStorage.setItem('isAdmin', true);
                    window.location.href = '/admin';
                }
                alert("Welcome back " + data.name);
            }
            else{
                alert("Incorrect email or password")
            }
        }else{
            alert("No fields can be empty")
        }
    }
   
   
    return (
        <div className='login-container'>
            <div className="brand-container">
                <div className="brand">
                    Rimhas
                </div>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <label className='fields'>
                    <span>Email:</span>
                    <input type="email" name='email' value={loginData.email} onChange={handleChange} className='txt-input' placeholder='example@gmail.com' required />
                </label>
                <label className='fields'>
                    <span>Password:</span>
                    <input type="password" name='password' value={loginData.password} onChange={handleChange} className='txt-input' required />
                </label>
                <button type="submit" className='submit-button'>Login</button>
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
import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [menuToggle, setMenuToggle] = useState(false)
    return (
        <>
            <nav className="navbar">
                <Link to="/" className="title">Rimhas</Link>
                <div className='menu'>
                    <div className='nav-links'>
                        <Link to='/' className='nav-link'>Home</Link>
                        <Link to='/about' className='nav-link'>About</Link>
                        {loggedIn ? <>
                            <button style={
                                {
                                    "backgroundColor": "transparent",
                                    "outline": "2px solid red",
                                    "color": "red"
                                }
                            }
                                onClick={() => {
                                    setLoggedIn(!loggedIn)
                                }}>
                                Logout</button><span className='profile'>P</span></>
                            : <Link to='/login' className='nav-link'>Login</Link>}
                    </div>
                    <div className="mobile-menu-toggle" onClick={() => {
                        setMenuToggle(!menuToggle);
                    }}>
                        <div className="hamburger">
                            <span className='hamburger-line'></span>
                            <span className='hamburger-line'></span>
                            <span className='hamburger-line'></span>
                        </div>
                    </div>
                </div>
            </nav>
            {menuToggle ?
                <div className='menu-mobile'>
                    <div className='nav-links-mobile'>
                        <Link to='/' className='nav-link' onClick={() => setMenuToggle(!menuToggle)}>Home</Link>
                        <Link to='/about' className='nav-link' onClick={() => setMenuToggle(!menuToggle)}>About</Link>
                        {loggedIn ?
                            <><button style={{
                                "backgroundColor": "transparent",
                                    "outline": "2px solid red",
                                    "color": "red",
                                    "width":"fit-content",
                                    "alignSelf":"center"
                            }}
                             onClick={() => {
                                localStorage.setItem('rimhasLoggedIn', false)
                                setMenuToggle(!menuToggle)
                                setLoggedIn(!loggedIn)
                            }}>Logout</button><span className='profile'>P</span></>
                            : <Link to='/login' className='nav-link' onClick={() => setMenuToggle(!menuToggle)}>Login</Link>}
                    </div>
                </div>
                : ""
            }

        </>

    )
}

export default Navbar
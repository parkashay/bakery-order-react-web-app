import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-info">
          <span>Rimhas Bake</span>
          <span>Shuklagandaki 3 - Dulegaunda, Tanahun</span>
          <span>example@gmail.com</span>
        </div>
        <div className="footer-links">
          {localStorage.isAdmin ? <Link to='/admin' className='footer-link'>Admin Panel</Link> : ""}
          <Link to='/login' className='footer-link'>Login</Link>
          <Link to='/signup' className='footer-link'>SignUp</Link>
        </div>
        <div className="copyright">
          ©Rimhas Bakery 2023
        </div>
      </div>
    </>
  )
}

export default Footer
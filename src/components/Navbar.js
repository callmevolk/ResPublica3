import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../assets/images/logo.svg'

const Navbar = () => {
  const [ show, setShow ] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Res Publica logo" />
          </Link>
          <button className={show ? "nav-btn nav-btn-show" : "nav-btn"} onClick={() => setShow(!show)}>
            <span className="line"></span><span className="line"></span><span className="line"></span>
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link to="/" className="nav-link" activeClassName="active-link" onClick={() => setShow(false)}>Početna</Link>
          <Link to="/misija" className="nav-link" activeClassName="active-link" onClick={() => setShow(false)}>Misija</Link>
          <Link to="/blog" className="nav-link" activeClassName="active-link" onClick={() => setShow(false)}>Blog</Link>
          <div className="nav-link contact-link">
            <Link to="/kontakt" className="btn" onClick={() => setShow(false)}>Kontaktirajte nas &rarr;</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

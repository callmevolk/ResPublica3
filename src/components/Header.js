import React from 'react'

const Header = props => {
  return (
    <header className="hero">
          {props.children}
          <div className="hero-container">
            <div className="hero-text">
              <h1>{props.title}</h1>
              <h4>{props.description}</h4>
            </div>
          </div>
      </header>
  )
}

export default Header

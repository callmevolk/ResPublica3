import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'


const Member = (props) => {
  return (
    <div className="team-member">
      <GatsbyImage
        image={props.image}
        alt="team member"
        className="member-img"
        placeholder="blurred"
      />
      <div className="overlay">
        <div className="overlay-content"> 
          <h5>{props.memberTitle}</h5>
          <p>{props.memberText}</p>
          <div className="overlay-icons">
            <a href={props.facebook} className="overlay-icon overlay-icon-facebook">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href={props.instagram} className="overlay-icon overlay-icon-instagram">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <div className="member-text">
        <h5>{props.name}</h5>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Member

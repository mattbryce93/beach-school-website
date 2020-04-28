import PropTypes from 'prop-types'
import React from 'react'
import profileImage from '../images/profileImage.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img src={profileImage} alt=''></img>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Hayley's Beach School</h1>
        <h4>
        Kia ora and welcome to Hayley’s Beach School!
        <br />
        I am offering Beach School sessions to schools and families on Waihi Beach. 
        <br />
        Come along, have fun and learn about the beach and seas!
        </h4>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('lessons')
            }}
          >
            Lessons
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header

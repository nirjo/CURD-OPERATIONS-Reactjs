/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Logo from '../Assets/Images/Logo/Logo.png'
import './styles.css'

function Header(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div
        class="collapse navbar-collapse d-flex justify-content-between headerLogo"
        id="navbarTogglerDemo01 "
      >
        <a class="navbar-brand" href="#">
          <img src={Logo} alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item ">
              <a class="nav-link" href="#">
                Why us?<span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Marketing Platform
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li>
              <button
                class="btn btn-outline-primary my-2 my-sm-0 SearchBtn"
                type="submit"
              >
                Sign Up, It's Free
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header

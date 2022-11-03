/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Logo from "../Assets/Images/Logo/Logo.png"
import "./styles.css"

function Header(props) {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
           
            <div class="collapse navbar-collapse d-flex justify-content-between headerLogo" id="navbarTogglerDemo01 ">
                <a class="navbar-brand" href="#">
                    <img src={Logo} alt="" />
                </a>

                <form class="form-inline my-2 my-lg-0 headerFormDiv">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item ">
                            <a class="nav-link" href="#">Why us?<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Marketing Platform</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li>
                        <button class="btn btn-outline-primary my-2 my-sm-0 SearchBtn" type="submit">Sign Up, It's Free</button>

                        </li>
                       
                    </ul>


                </form>
            </div>
        </nav>
    );
}

export default Header;
import React from 'react';
import Logo from "../Assets/Images/Logo/Logo.png"

function Footer(props) {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse d-flex  footer footerLogo" id="navbarTogglerDemo01 ">
                <a class="navbar-brand" href="#">
                    <img src={Logo} alt="" />
                </a>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0 footerTrademarksection" >
                    
                        <li class="nav-item terms" >
                            <a class="nav-link" href="#"> Terms & Condition<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item policy">
                            <a class="nav-link" href="#">Privacy Policy</a>
                        </li>
                    
                    <li class="nav-item landmark">
                        <a class="nav-link" href="#">
                            ® 2019 Company name. All rights reserved
                        </a>
                    </li>
                </ul>
            </div>



        </nav>

    );
}

export default Footer;
import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedIn } from "@fortawesome/free-solid-svg-icons";

import linkedin from '../../images/socialIcons/linkedin2.jpg'
import whatsapp from '../../images/socialIcons/whatsapp.jpg'

function Footer() {

    function ScrollToTop(){
        window.scrollTo(0, 0);
    }


  return (
      <footer class="footer">
        <div class="container">
            <div>
                <div class="w-layout-grid footer-main-grid">
                    <div class="footer-left-wrapper">
                        {/* <a href="#" class="footer-logo-link w-nav-brand">
                            <img src={longLogo} loading="lazy" width="100" alt=""/>
                        </a> */}
                        <p class="subhead third">
                        Homanity - <span class="gray-text">One stop Solution for best electrical and plumbing services.</span>
                        </p>
                        <div class="margin-20px make-15px">
                            <p class="copyright">
                            &#169; Copyright 2022 - 2023
                            </p>
                            {/* <p class="copyright">
                            All rights reserved 
                            </p> */}
                        </div>
                    </div>
                    <div class="w-layout-grid footer-grid">
                        <div class="foorer-list">
                            <div class="footer-title">Navigation</div>
                            <Link to="/" aria-current="page" class="footer-link w-inline-block w--current" onClick={ScrollToTop}>
                                <div>Home</div>
                            </Link>
                            <Link to="about/" class="footer-link w-inline-block" onClick={ScrollToTop}>
                                <div>About</div>
                            </Link>
                            <Link to="plans/" class="footer-link w-inline-block" onClick={ScrollToTop}>
                                <div>Plans</div>
                            </Link>
                            <Link to="contact/" class="footer-link w-inline-block" onClick={ScrollToTop}>
                                <div>Contact</div>
                            </Link>
                        </div>
                        
                        <div class="foorer-list">
                            <div class="footer-title">Social</div>
                            <div class="social-wrapper left">
                                <a href="https://www.instagram.com/_homanity/" target="_blank" class="social-icon-footer w-inline-block">
                                    <img src="https://assets.website-files.com/62f12c77027bfb4b634fc1b9/62f12c77027bfbbf034fc1f7_instagram.svg" loading="lazy" width="20" alt=""/>
                                </a>

                                <a href="https://wa.me/+919098630635" target="_blank" class="social-icon-footer w-inline-block">
                                    <img src={whatsapp} width="22" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer> 
  )
}

export default Footer

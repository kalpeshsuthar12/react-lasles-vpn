import React from 'react'

export default function Footer() {

    return (
        <section className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <a href="/">
                            <img className="footer-logo" src="../assets/img/logo.svg" alt="logo" width="30" />
                        </a>
                        <p className="footer-description"><span>LaslesVPN </span>is a private virtual network that<br />has unique features and has high security.</p>
                        <ul className="footer-socialmedia">
                            <li><a href="/"><img src="../assets/img/Facebook.svg" alt="Facebook"></img></a></li>
                            <li><a href="/"><img src="../assets/img/Instagram.svg"  alt="Instagram"></img></a></li>
                            <li><a href="/"><img src="../assets/img/Twitter.svg"  alt="Twitter"></img></a></li>
                        </ul>
                        <p className='footer-company'>&copy; 2020LaslesVPN</p>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                        <h5 className='footer-heading'>Product </h5>
                        <ul className='footer-menu-links'>
                            <li><a href="/">Download</a></li>
                            <li><a href="/">Pricing</a></li>
                            <li><a href="/">Locations</a></li>
                            <li><a href="/">Server</a></li>
                            <li><a href="/">Countries</a></li>
                            <li><a href="/">Blog</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                        <h5 className='footer-heading'>Engage</h5>
                        <ul className="footer-menu-links">
                            <li><a href="/">LaslesVPN ?</a></li>
                            <li><a href="/">FAQ</a></li>
                            <li><a href="/">Tutorials</a></li>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Privacy Policy </a></li>
                            <li><a href="/">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-4 col-lg-2">
                        <h5 className='footer-heading'>Earn Money </h5>
                        <ul className="footer-menu-links">
                            <li><a href="/">Affiliate</a></li>
                            <li><a href="/">Become Partner</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )

}
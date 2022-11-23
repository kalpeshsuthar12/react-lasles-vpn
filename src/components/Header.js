import React from 'react'

export default function Header() {

    return (
        <>
            <nav className="fixed-header">
                <div className="container nav-flex">
                    <div className="logo">
                        <a href="/"><img src='../assets/img/logo.svg' alt="logo" /></a>
                    </div>
                    <input type="checkbox" id="nav" className="hidden" />
                    <label htmlFor="nav" className="nav-open"><i></i><i></i><i></i></label>
                    <div className='nav-container'>
                        <div className="main-nav">
                            <ul>
                                <li><a href="/" className="active">About</a></li>
                                <li><a href="/">Features</a></li>
                                <li><a href="/">Pricing</a></li>
                                <li><a href="/">Testimonials</a></li>
                                <li><a href="/">Help</a></li>
                            </ul>
                        </div>
                        <div className="btn-nav">
                            <ul>
                                <li><a href="/" className="btn-signin">Sign in</a></li>
                                <li><a href="/" className="btn-signup" >Sign Up</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )

}
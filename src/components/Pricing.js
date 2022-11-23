import React from 'react'

export default function Pricing() {

    return (
        <section className="pricing">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-5 text-center">
                        <h2>Choose Your Plan</h2>
                        <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
                    </div>
                </div>

                <div className="row flex-center">
                    <div className="col-md-4">
                        <div className='pricing-box'>
                            <div className='pricing-img'>
                                <img src="../assets/img/free.svg" alt="slider" />
                            </div>
                            <div className='pricing-heading'>
                                <h5>Free Plan</h5>
                            </div>
                            <div className='pricing-benefits'>
                                <ul>
                                    <li>Unlimited Bandwitch.</li>
                                    <li>Encrypted Connection.</li>
                                    <li>No Traffic Logs</li>
                                    <li>Works on All Devices.</li>
                                </ul>
                            </div>
                            <div className='price'>
                                <h2>Free</h2>
                            </div>
                            <div className='price-btn'>
                                <button type='button' className='btn-theme'>Select</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className='pricing-box'>
                            <div className='pricing-img'>
                                <img src="../assets/img/free.svg" alt="slider" />
                            </div>
                            <div className='pricing-heading'>
                                <h5>Standard Plan</h5>
                            </div>
                            <div className='pricing-benefits'>
                                <ul>
                                    <li>Unlimited Bandwitch.</li>
                                    <li>Encrypted Connection.</li>
                                    <li>Yes Traffic Logs.</li>
                                    <li>Works on All Devices.</li>
                                    <li>Connect Anyware.</li>
                                </ul>
                            </div>
                            <div className='price'>
                                <h2>$9 <span>/ mo</span></h2>
                            </div>
                            <div className='price-btn'>
                                <button type='button' className='btn-theme'>Select</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className='pricing-box active'>
                            <div className='pricing-card'>
                                <div className='pricing-img'>
                                    <img src="../assets/img/free.svg" alt="slider" />
                                </div>
                                <div className='pricing-heading'>
                                    <h5>Premium Plan</h5>
                                </div>
                                <div className='pricing-benefits'>
                                    <ul>
                                        <li>Unlimited Bandwitch.</li>
                                        <li>Encrypted Connection.</li>
                                        <li>Yes Traffic Logs.</li>
                                        <li>Works on All Devices.</li>
                                        <li>Connect Anyware.</li>
                                        <li>Get New Features.</li>
                                    </ul>
                                </div>
                                <div className='price'>
                                    <h2>$12 <span>/ mo</span></h2>
                                </div>
                                <div className='price-btn'>
                                    <button type='button' className='active btn-theme'>Select</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}
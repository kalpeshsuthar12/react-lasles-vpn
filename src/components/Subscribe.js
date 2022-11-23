import React from 'react'

export default function Subscribe() {

    return (
        <section className="subscribe" style={{ "marginBottom": "-10rem" }}>
            <div className="container">
                <div className="card py-5 px-5 border-0 shadow-sm">
                    <div className="card-body">
                        <div className="row flex-center">
                            <div className="col-12 col-lg-6">
                                <h2>Subscribe Now for <br />Get Special Features!</h2>
                                <p>Let's subscribe with us and find the fun.</p>
                            </div>
                            <div className="col-12 col-lg-6 subscribe_button">
                                <a className="subscribe-btn" href="/">Subscribe Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}
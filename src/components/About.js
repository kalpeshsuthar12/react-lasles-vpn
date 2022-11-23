import React from 'react'

export default function About() {

    return (
        <section className="about">
            <div className="container">
                <div className="row flex-center">
                    <div className="col-md-7 col-lg-6">
                        <img src="../assets/img/Illustration 2.svg" alt="slider" />
                    </div>
                    <div className="col-lg-6 col-md-5" style={{ "alignSelf": "center" }}>
                        <div className="about-content">
                            <h1>We Provide Many<br />Features You Can Use</h1>
                            <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
                            <ul>
                                <li>Powerfull online protection.</li>
                                <li>Internet without borders.</li>
                                <li>Supercharged VPN</li>
                                <li>No specific time limits.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}
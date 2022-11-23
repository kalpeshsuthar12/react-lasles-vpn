import React from 'react'

export default function Static() {

    return (
        <section className="statics">
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-4">
                                <div className="static border-end d-flex justify-content-center">
                                    <div className="static-icon">
                                        <div className="badge">
                                            <img src="../assets/img/Group 1215.svg" alt="users"></img>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="static-count">90+ </p>
                                        <p className="static-name">Users </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="static border-end d-flex justify-content-center">
                                    <div className="static-icon">
                                        <div className="badge">
                                            <img src="../assets/img/Group 1216.svg" alt="location"></img>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="static-count">30+ </p>
                                        <p className="static-name">Locations </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="static d-flex justify-content-center">
                                <div className="static-icon">
                                        <div className="badge">
                                            <img src="../assets/img/Group 1217.svg" alt="servers"></img>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="static-count">50+ </p>
                                        <p className="static-name">Servers </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}
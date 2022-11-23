import React from 'react'

export default function Brand() {

    const brands = [{
        img: "../assets/img/Mask Group (1).svg"
    }, {
        img: "../assets/img/Mask Group (2).svg"
    }, {
        img: "../assets/img/Mask Group (3).svg"
    }, {
        img: "../assets/img/Mask Group (4).svg"
    }, {
        img: "../assets/img/Mask Group.svg"
    }]

    return (
        <section className="brand">
            <div className="container">
                <div className="row justify-content-center">
                    {
                        Array.from(brands).map((item, index) => (
                            <div className="col-6 col-sm-4 col-md-2 text-align-center" key={index}>
                                <img src={item.img} alt="brand" height="50" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )

}
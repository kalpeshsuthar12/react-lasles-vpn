import React from 'react'

export default function Testimonial() {

    const testimonials = [
        {
            name: "Viezh Robert",
            address: "arsaw, Poland",
            img: "../assets/img/Ellipse 175 (1).png",
            text: "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
            rate: "4.5"

        }, {

            name: "Yessica Christy",
            address: "Shanxi, China",
            img: "../assets/img/Ellipse 175 (2).png",
            text: "I like it because I like to travel far and still can connect with high speed.",
            rate: "4.5"
        }, {

            name: "Kim Young Jou",
            address: "Seoul, South Korea",
            img: "../assets/img/Ellipse 175.png",
            text: "This is very unusual for my business that currently requires a virtual private network that has high security.",
            rate: "4.5"
        },
        {
            name: "Viezh Robert",
            address: "arsaw, Poland",
            img: "../assets/img/Ellipse 175 (1).png",
            text: "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
            rate: "4.5"

        }, {

            name: "Yessica Christy",
            address: "Shanxi, China",
            img: "../assets/img/Ellipse 175 (2).png",
            text: "I like it because I like to travel far and still can connect with high speed.",
            rate: "4.5"
        }, {

            name: "Kim Young Jou",
            address: "Seoul, South Korea",
            img: "../assets/img/Ellipse 175.png",
            text: "This is very unusual for my business that currently requires a virtual private network that has high security.",
            rate: "4.5"
        }
    ]

    return (
        <section className="testimonial">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-5">
                        <h2>Trusted by Thousands of Happy Customer</h2>
                        <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
                    </div>
                    <div className="col-md-12">
                        <div className="owl-carousel owl-theme">
                            {
                                Array.from(testimonials).map((item, index) => (
                                    <div className="item" key={index}>
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <img src={item.img} alt="" />
                                                        <div className="testmonial-customer">
                                                            <h6>{item.name}</h6>
                                                            <p>{item.address}</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center"><span className="text-900 me-3">{item.rate}</span>
                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FEA250" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"> </path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="card-text pt-3">“{item.text}”.</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}
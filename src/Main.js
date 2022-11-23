import React from 'react'
import Header from './components/Header';
import Statics from './components/Statics';
import Slider from './components/Slider';
import Pricing from './components/Pricing';
import Map from './components/Map';
import Brand from './components/Brand';
import Testimonial from './components/Testimonial';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import About from './components/About';

export default function Main(){
    return( 
        <main className="main" id="top">
            <Header></Header>
            <Slider></Slider>
            <Statics></Statics>
            <About></About>
            <Pricing></Pricing>
            <Map></Map>
            <Brand></Brand>
            <Testimonial></Testimonial>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </main>
     )
}
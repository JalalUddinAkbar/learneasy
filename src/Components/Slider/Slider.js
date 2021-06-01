import React from 'react';
import './Slider.css';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../images/slide1.jpg';
import slide2 from '../../images/slide2.jpg';
import slide3 from '../../images/slide3.jpg';





const Slider = () => {
    return (
        <div>
            <Carousel >
                <Carousel.Item className="slider-item">
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="slider-caption">
                        <h1>The Largest Platform for Online Learning</h1>
                        <button className="btn btn-outline-warning">Try For Free</button>
                    </Carousel.Caption>
                </Carousel.Item >
                <Carousel.Item className="slider-item">
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="slider-caption">
                        <h1>Explore our Schools to Find Your Perfect Program</h1>
                        <button className="btn btn-outline-warning">Try For Free</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="slider-item">
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="slider-caption">
                        <h1>Discover Your Way To Drive with Future and gain Knowledge.</h1>
                        <button className="btn btn-outline-warning">Try For Free</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;
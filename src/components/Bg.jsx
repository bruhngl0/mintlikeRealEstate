import React from 'react';
import { Carousel } from 'react-bootstrap';

const Bg = () => {
    const baseImages = [
        "model1.jpg", 
        "model2.jpg", 
        "model3.jpg"
    ];
    // Repeat the images 10 times for a longer seamless loop
    const images = Array(100).fill(baseImages).flat();

    return (
        <div className="carousel-container" id="home">
            <Carousel className='cara-one'>
                {images.map((imgSrc, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={imgSrc}
                            alt={`Background ${index + 1}`}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Bg;



import React, { useState } from 'react';
import Dots from './Dots';

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1)
    }

    return (
        <section className="slider">
            <button className="left arrow" onClick={prevSlide}></button>
            <button className="right arrow" onClick={nextSlide}></button>
            {slides.map((img, idx) => {
                return (
                    <div className={idx === current ? 'slide active' : 'slide'} key={idx}>
                        {idx === current && (
                            <img key={img.id} src={img.image} alt={img.alt} className="image" />
                        )}
                    </div>
                )
            })}
            <Dots slides={slides} current={current}/>
        </section>
    )
}

export default ImageSlider;
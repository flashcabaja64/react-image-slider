import React from 'react';
import Dots from './Dots';

const ImageSlider = ({ slides, current, toggleModal, prevSlide, nextSlide }) => {
    return (
        <section className="slider">
            <button className="left arrow" onClick={prevSlide}></button>
            <button className="right arrow" onClick={nextSlide}></button>
            {slides.map((img, idx) => {
                return (
                    <div className={idx === current ? 'slide active' : 'slide'} key={idx}>
                        {idx === current && (
                            <img 
                                key={img.id} 
                                src={img.image} 
                                alt={img.alt} 
                                className="image" 
                                onClick={toggleModal}
                            />
                        )}
                    </div>
                )
            })}
            <Dots slides={slides} current={current} />     
        </section>
    )
}

export default ImageSlider;
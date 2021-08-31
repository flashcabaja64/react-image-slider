import React from 'react';

const Dots = ({ slides, current }) => {
    return (
        <div className="slider_main_nav">
            {slides.map((_, idx) => (
                <span key={idx} className={current === idx ? "slider_nav active" : "slider_nav"}></span>
            ))}
        </div>
    )
}
export default Dots;
import './App.css';
import React, { useState } from 'react';
import ImageSlider from './components/ImageSlider';
import Header from './components/Header';
import Modal from './components/Modal'
import SliderJSON from './assets/slider-data.json'

const App = () => {
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  
  //Increments index of current slide. Set index back to zero after last slide
  const nextSlide = () => {
    setCurrent(current === SliderJSON.length - 1 ? 0 : current + 1)
  }

  //Decrements index of current slide. Set to last index after going back on first slide
  const prevSlide = () => {
    setCurrent(current === 0 ? SliderJSON.length - 1 : current - 1)
  }

  const toggleModal = () => {
    setShowModal(prev => !prev)
  }
  
  return (
    <div className="App">
      <Header />
      <ImageSlider 
        current={current}
        slides={SliderJSON} 
        toggleModal={toggleModal}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
      <Modal 
        slides={SliderJSON} 
        current={current} 
        toggleModal={toggleModal}
        showModal={showModal} 
      />
    </div>
  );
}

export default App;

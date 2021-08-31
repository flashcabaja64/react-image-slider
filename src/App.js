import './App.css';
import ImageSlider from './components/ImageSlider';
import Header from './components/Header'
import SliderJSON from './assets/slider-data.json'

function App() {
  return (
    <div className="App">
      <Header />
      <ImageSlider slides={SliderJSON}/>
    </div>
  );
}

export default App;

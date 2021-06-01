
import { useState } from 'react';
import './App.css';
import CoursesInfo from './Components/CoursesInfo/CoursesInfo';
import Header from './Components/Header/Header';
import Second from './Components/Second/Second';
import Slider from './Components/Slider/Slider';
import Third from './Components/Third/Third';


function App() {
  return (
    <div >
      <div>
      <Header></Header>
      </div>
      <div className="slider">
      <Slider></Slider>
      </div>

      <div className="second-part">
        <Second></Second>
      </div>
      <CoursesInfo></CoursesInfo>
      <Third></Third>
      
    </div>
  );
}

export default App;

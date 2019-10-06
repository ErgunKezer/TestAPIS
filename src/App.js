import React from 'react';
import './App.css';
import '../node_modules/react-id-swiper/lib/styles/css/swiper.css';
import Swiper from 'react-id-swiper';

function App() {
  const params = {
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 2,
    slidesPerGroup:1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };
  return (
    <div className="App">
      <Swiper {...params}>
          <div className="card">
            1
          </div>
          <div className="card">
            2
          </div>
          <div className="card">
            3
          </div>
          <div className="card">
            4
          </div>
          <div className="card">
            5

          </div>
      </Swiper>
    </div>
  );
}

export default App;

import React from 'react';
import '../assets/styles/app.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Search />
    </div>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
import '../assets/styles/app.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/initalState')
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <div className='app'>
      <Header />
      <Search />
      {videos.mylist?.length > 0 && (
        <Categories sectionTitle='Reacomendaciones'>
          <Carousel>
            {videos.trends?.map((item) => <CarouselItem key={item.id} {...item} />)}
          </Carousel>
        </Categories>
      )}

      <Categories sectionTitle='Tendencias'>
        <Carousel>
          {videos.trends?.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories sectionTitle='Originales'>
        <Carousel>
          {videos.trends?.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;

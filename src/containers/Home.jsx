/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../assets/styles/app.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

//  State
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState';

const Home = () => {
  const initialState = useInitialState(API);

  return (
    <>
      <Search />
      {initialState.mylist?.length > 0 && (
        <Categories sectionTitle='Reacomendaciones'>
          <Carousel>
            {initialState.trends?.map((item) => <CarouselItem key={item.id} {...item} />)}
          </Carousel>
        </Categories>
      )}

      <Categories sectionTitle='Tendencias'>
        <Carousel>
          {initialState.trends?.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories sectionTitle='Originales'>
        <Carousel>
          {initialState.trends?.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    </>
  );
};

export default Home;

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/app.scss';

//  State with Hooks
// import useInitialState from '../hooks/useInitialState';

const Home = ({ mylist, trends, originals }) => {
  return (
    <>
      <Search />
      {mylist?.length > 0 && (
        <Categories sectionTitle='My list'>
          <Carousel>
            {mylist?.map((item) => (
              <CarouselItem
                key={item.id}
                {...item}
                isList
              />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories sectionTitle='Tendencias'>
        <Carousel>
          {trends?.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories sectionTitle='Originales'>
        <Carousel>
          {originals?.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);

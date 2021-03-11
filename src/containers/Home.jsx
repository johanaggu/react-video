/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { connect } from 'react-redux'; //CONNECT A REDUX

import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/app.scss';

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Search />
      {myList?.length > 0 && (
        <Categories sectionTitle='My list'>
          <Carousel>
            {myList?.map((item) => (
              <CarouselItem
                key={item.id}
                {...item}
                isList={true}
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
const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};
 
//[DOCUMENTATION] connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)(<Component />)
//[COURSE] connect(props, actions)(<Component />)
export default connect(mapStateToProps, null)(Home);

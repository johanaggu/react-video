import React from 'react';
import PropTypes from 'prop-types';

// "connect" connect to redux 
import { connect } from 'react-redux'; 
import { setFavorite, deleteFavorite } from '../actions';

// Assets
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = (props) => {
  const { id, title, year, contentRating, duration, cover, isList } = props;
  
  const handleSetFavorite = () => {
    const { setFavorite } = props
    setFavorite({
      id, title, year, contentRating, duration, cover,
    });
  };

  const handleDeleteFavorite = (id) => {
    const { deleteFavorite } = props
    deleteFavorite(id);
  };
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img
            className='carousel-item__details--img'
            src={playIcon}
            alt='Play Icon'
          />
          {isList && (
            <img
              className='carousel-item__details--img'
              src={removeIcon}
              alt='Remove Icon'
              onClick={() => handleDeleteFavorite(id)}
            />
          )}
          {
            !isList && (
              <img
                className='carousel-item__details--img'
                src={plusIcon}
                alt='Plus Icon'
                onClick={handleSetFavorite}
              />
            )
          }

        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration} minutos`}
        </p>
      </div>
    </div>
  );
};
CarouselItem.propTypes = {
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
  cover: PropTypes.string,
};

const mapDipachToProps = {
  setFavorite,
  deleteFavorite,
};

//[DOCUMENTATION] connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)(<Component />)
//[COURSE] connect(props, actions)(<Component />)
export default connect(null, mapDipachToProps)(CarouselItem);

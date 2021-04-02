import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFavorite, deleteFavorite, getVideoSource } from '../actions';

// Assets
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = (props) => {
  const { id, title, year, contentRating, duration, cover, isList } = props;

  const handleSetFavorite = () => {

    props.setFavorite({
      id, title, year, contentRating, duration, cover,
    });
  };

  const handleDeleteFavorite = (id) => {
    props.deleteFavorite(id);
  };

  const handlePlay = (id) => {
    props.history.push('/login')
  }

  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${id}`} >
            <img
              className='carousel-item__details--img'
              src={playIcon}
              alt='Play Icon'
            />
          </Link>
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

import React from 'react';
import { connect } from 'react-redux'
import '../assets/styles/components/Player.scss';

// This line connect with redex
let connectComponent;

const MediaPlayer = props => {
    const { id } = props.match.params;
    return(
        <div className='Player' >
            <video controls autoPlay>
                <source src='https://res.cloudinary.com/dufryyw5r/video/upload/v1599364750/db_movies/video/Fight_Club_-_Theatrical_Trailer_Remastered_in_HD_kiykxq.mp4' type='video/mp4' />
            </video>
            <div className='Player-back' >
                <button type='button' onClick={() => props.history.goBack() }>
                    Regresar
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        playing: state.playing
    }
}

connectComponent = connect(mapStateToProps,null);
export default connectComponent(MediaPlayer)
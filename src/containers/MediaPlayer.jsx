import React from 'react';
import { connect } from 'react-redux'
import '../assets/styles/components/Player.scss ';

const MediaPlayer = props => {
    const { id } = props.match.params;
    return(
        <div className='Player' >
            <video controls autoPlay>
                <source src='' type='video/mp4' />
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

export default connect(mapStateToProps,null)(MediaPlayer)
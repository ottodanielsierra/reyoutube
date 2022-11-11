import React from 'react';
import Video from './../assets/trailer.mp4';
import thumbnail from './../assets/img/thumbnail.png';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

class Player extends React.Component {

    componentDidMount () {
        let player = new Plyr('#player');
        player.autoplay = false;
    }

    render() {
        return (
            <div>
                <video id='player' width="100%" controls poster={thumbnail}>
                    <source src={Video}/>
                    Your browser does not support HTML video.
                </video>
                <div className="columns mt-1">
                    <div className="column">
                        <strong className='is-size-5 has-text-light'>Chainsaw Man - Official Trailer</strong>
                        <p style={{opacity: 0.8}}><i className="fas fa-eye"></i> 254,125 views</p>
                    </div>
                    <div className="column has-text-right">
                        <span className='pr-4'><i className="fa-solid fa-share-from-square"></i> Save</span>
                        <span><i className="fas fa-heart"></i> 6.8k</span>
                    </div>
                </div>            
            </div>
        );
    }
}

export default Player;
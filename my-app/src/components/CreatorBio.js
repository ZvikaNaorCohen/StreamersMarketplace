import React from 'react';
import './CreatorBio.css';
import profilePic from '../images/revX.png'
import VideoPlayer from './VideoPlayer'


function CreatorBio(id) {
    var creatorName = "Symfuhny";
    var creatorAboutMe = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi nec commodo mollis, sem neque consectetur elit, vel cursus felis enim sed quam. Donec eget tellus tortor.";
    const playerRef = React.useRef(null);

    const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [{
        src: '../videos/symfuhny.mp4',
        type: 'video/mp4'
        }]
    };

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on('waiting', () => {
            console.log('player is waiting');
        });

        player.on('dispose', () => {
            console.log('player will dispose');
        });
    };
        
    return (
    <div className="creator-bio-container">
      <div className="creator-bio-header">
        <img src={profilePic} alt="creator Profile" />
        <h1>{creatorName}</h1>
      </div>
      <div className="creator-bio-content">
        <h2>About Me</h2>
        <p>{creatorAboutMe}</p>
        {/* <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} /> */}
      </div>
    </div>
  );
}

export default CreatorBio;
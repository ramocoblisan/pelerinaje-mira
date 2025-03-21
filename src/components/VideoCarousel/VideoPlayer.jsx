import React from 'react';
import styles from './VideoPlayer.module.css';

const VideoPlayer = ({ videoSrc, posterSrc }) => {
  return (
    <div className={styles.videoPlayer}>
      <video 
        width="640" 
        height="360" 
        controls 
        poster={posterSrc} 
        style={{ backgroundColor: 'black' }} 
      >
        <source src={videoSrc} type="video/mp4" />
        Browserul tău nu suportă tag-ul video.
      </video>
    </div>
  );
};

export default VideoPlayer;
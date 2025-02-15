import React from 'react';
import { useInView } from 'react-intersection-observer';
import VideoPlayer from 'components/VideoCarousel/VideoPlayer';
import styles from './VideosSection.module.css';
import video1 from '../../assets/videos/video1.mp4';
import video2 from '../../assets/videos/video2.mp4';
import video3 from '../../assets/videos/video3.mp4';
import video4 from '../../assets/videos/video4.mp4';
import video5 from '../../assets/videos/video5.mp4';

const VideoSection = () => {

    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    const videos = [
        { src: video1 },
        { src: video2 },
        { src: video3 },
        { src: video4 },
        { src: video5 },
      ];

    return (
      <>
      <div 
      ref={ref}
      className={`${styles.videoSectionContainer} ${inView ? 'fade-in in-view' : 'fade-in'}`}>
        <div className={styles.cloudBackground}></div>
        <h2 className={styles.sectionTitle}>Amintiri din pelerinaje</h2>
        <div className={styles.videoContainer}>
            {videos.map((video, index) => (
            <VideoPlayer key={index} videoSrc={video.src} videoTitle={video.title} />
            ))}
      </div>
      </div>
      </>
    );
  };
  
  export default VideoSection;
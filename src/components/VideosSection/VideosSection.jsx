import React from 'react';
import { useInView } from 'react-intersection-observer';
import VideoPlayer from 'components/VideoCarousel/VideoPlayer';
import styles from './VideosSection.module.css';
const video1 = `${process.env.PUBLIC_URL}/videos/video1.mp4`;
const video2 = `${process.env.PUBLIC_URL}/videos/video2.mp4`;
const video3 = `${process.env.PUBLIC_URL}/videos/video3.mp4`;
const video4 = `${process.env.PUBLIC_URL}/videos/video4.mp4`;
const video5 = `${process.env.PUBLIC_URL}/videos/video5.mp4`;
const poster1 = `${process.env.PUBLIC_URL}/images/poster1.png`;
const poster2 = `${process.env.PUBLIC_URL}/images/poster2.png`;
const poster3 = `${process.env.PUBLIC_URL}/images/poster3.png`;
const poster4 = `${process.env.PUBLIC_URL}/images/poster4.png`;
const poster5 = `${process.env.PUBLIC_URL}/images/poster5.png`;

const VideoSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const videos = [
    { src: video1, poster: poster1 },
    { src: video2, poster: poster2 },
    { src: video3, poster: poster3 },
    { src: video4, poster: poster4 },
    { src: video5, poster: poster5 },
  ];

  return (
    <>
      <div 
        ref={ref}
        className={`${styles.videoSectionContainer} ${inView ? 'fade-in in-view' : 'fade-in'}`}
      >
        <div className={styles.cloudBackground}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/videosSecBackground.jpg)`,
        }}>
        </div>
        <h2 className={`${styles.sectionTitle} ${inView ? styles.inView : ''}`}>
          Amintiri din pelerinaje
        </h2>
        <div className={styles.videoContainer}>
          {videos.map((video, index) => (
            <VideoPlayer key={index} videoSrc={video.src} posterSrc={video.poster} videoTitle={video.title} />
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoSection;
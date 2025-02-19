import React from 'react';
import Header from './Header/Header';
import Cards from './Cards/Cards';
import VideoSection from './VideosSection/VideosSection';
import Footer from './Footer/Footer';
import styles from "./App.module.css"

export const App = () => {

  return (
    <div className={styles.appContainer}>
      <Header />
      <Cards />
      <VideoSection />
      <Footer />
    </div>
  );
};
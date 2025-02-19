import React from 'react';
import Header from './Header/Header';
import Cards from './Cards/Cards';
import VideoSection from './VideosSection/VideosSection';
import Footer from './Footer/Footer';

export const App = () => {

  return (
    <>
      <Header />
      <Cards />
      <VideoSection />
      <Footer />
    </>
  );
};
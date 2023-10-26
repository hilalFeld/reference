import React from 'react';
import Header from '../components/Header';
import Slideshow from '../components/Slideshow';
import Boxes from '../components/Boxes';
import Footer from '../components/Footer';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import '../css/App.css';

function Home() {
  return (
  
    <div className="home-container">
      
      <Header />
      <Slideshow />
      <Services />
      <Testimonials />
      <Boxes />
      <Footer />
    </div>
  );
}

export default Home;

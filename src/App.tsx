import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ImageUpload from './components/ImageUpload';
import Reviews from './components/Reviews';
import Information from './components/Information';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <ImageUpload />
        <Reviews />
        <Information />
      </main>
      <Footer />
    </div>
  );
}

export default App;
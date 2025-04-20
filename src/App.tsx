import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import BlogSection from './components/BlogSection/BlogSection';
import FaqSection from './components/FaqSection/FaqSection';
import Footer from './components/Footer/Footer';
import MoodTracker from './components/MoodTracker/MoodTracker';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <BlogSection />
        <FaqSection />
        <MoodTracker />
      </main>
      <Footer />
    </div>
  );
}

export default App;
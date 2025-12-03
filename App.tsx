
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import OdooSection from './components/OdooSection';
import WhyMe from './components/WhyMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <OdooSection />
        <WhyMe />
        <Portfolio />
        <Contact />
      </main>
      <ChatWidget />
    </div>
  );
}

export default App;

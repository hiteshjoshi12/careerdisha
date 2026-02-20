import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions'; // Importing the new component
import Footer from './Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Note: If you kept the mt-[70px] inside the Hero component, 
        you can remove the pt-[70px] here to avoid double-spacing. 
        I've kept it here just in case! 
      */}
      <main className="">
        <Hero />
        <Solutions />
        {/* Other components like Services, About, etc. will go here */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
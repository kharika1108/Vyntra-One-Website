import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './Home.jsx';

const App = () => {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
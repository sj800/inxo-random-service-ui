// App.jsx
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import Menu from './components/pages/Menu';

import NumberGrid from './components/NumberGrid';
import About from './components/pages/About';
import Stats from './components/pages/Stats';
import RandomBall from './components/RandomBall';

import { fetchAllCounts } from './services/randomService';
import ChessPage from './components/pages/ChessPage';

const App = () => {
  const [counts, setCounts] = useState(Array(100).fill(0));
  const [incrementedNumber, setIncrementedNumber] = useState(null);
  const [highestCountNumber, setHighestCountNumber] = useState(null);

  const loadData = async () => {
    try {
      const { data, incrementedNumber, highestCountNumber } = await fetchAllCounts();
      const newCounts = Array(100).fill(0);
      data.forEach(item => {
        if (item.number >= 1 && item.number <= 100) {
          newCounts[item.number - 1] = item.count;
        }
      });
      setCounts(newCounts);
      setIncrementedNumber(incrementedNumber);
      setHighestCountNumber(highestCountNumber);
    } catch (err) {
      console.error('Failed to fetch count data:', err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

 return (
    <div className="relative min-h-screen flex bg-[#0A0A0A] text-white font-sans">
      <Menu />

      <main className="flex-1 px-6 py-10">
        <Routes>
          {/* Special full-page route for ChessBoard */}
          

          {/* Default layout routes */}
          <Route
            path="/"
            element={
              <div className="max-w-7xl mx-auto">
                <Header />
                <NumberGrid
                  counts={counts}
                  incrementedNumber={incrementedNumber}
                  highestCountNumber={highestCountNumber}
                  loadData={loadData}
                />
                <Footer />
              </div>
            }
          />
          <Route
            path="/random-ball"
            element={
              <div className="max-w-7xl mx-auto">
                <Header />
                <RandomBall />
                <Footer />
              </div>
            }
          />
          <Route
            path="/stats"
            element={
              <div className="max-w-7xl mx-auto">
                <Header />
                <Stats />
                <Footer />
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div className="max-w-7xl mx-auto">
                <Header />
                <About />
                <Footer />
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;

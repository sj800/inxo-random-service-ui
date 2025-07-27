// App.jsx
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';

import NumberGrid from './components/NumberGrid';
import About from './components/pages/About';
import Stats from './components/pages/Stats';
import RandomBall from './components/RandomBall';

import { fetchAllCounts } from './services/randomService';

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
    <div className="relative min-h-screen flex flex-col sm:flex-row bg-[#0A0A0A] text-white font-sans">
      <Menu />

      <main className="flex-1 px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <NumberGrid
                  counts={counts}
                  incrementedNumber={incrementedNumber}
                  highestCountNumber={highestCountNumber}
                  loadData={loadData}
                />
              }
            />
            <Route path="/random-ball" element={<RandomBall />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;

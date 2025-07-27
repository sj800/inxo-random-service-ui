// App.jsx
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import NumberGrid from './components/NumberGrid';
import Footer from './components/Footer';
import GeneratePrompt from './components/GeneratePrompt';
import { fetchAllCounts } from './services/randomService';

const App = () => {
  const [counts, setCounts] = useState(Array(100).fill(0));
  const [incrementedNumber, setIncrementedNumber] = useState(null);
  const [highestCountNumber, setHighestCountNumber] = useState(null);

  const loadData = async () => {
      try {
        const {data,  incrementedNumber, highestCountNumber } = await fetchAllCounts();
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
    <main className="min-h-screen bg-[#0A0A0A] text-white px-6 py-10 font-sans">
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
    </main>
  );
};

export default App;

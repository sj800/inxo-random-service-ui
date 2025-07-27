import React, { useState } from 'react';

const RandomBall = () => {
  const [number, setNumber] = useState(null);
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [error, setError] = useState('');

  const generate = () => {
    const parsedMin = parseInt(min) || 1;
    const parsedMax = parseInt(max) || 100;

    if (parsedMin > parsedMax) {
      setError('Provide a valid range');
      return;
    }

    setError('');
    const rand = Math.floor(Math.random() * (parsedMax - parsedMin + 1)) + parsedMin;
    setNumber(rand);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-6">
      <div className="flex space-x-4 items-center">
        <span className="text-gray-300">Generate a number between</span>
        <input
          type="number"
          placeholder="1"
          value={min}
          onChange={(e) => setMin(e.target.value)}
          className="w-20 p-2 bg-[#1F1F1F] border border-gray-600 rounded text-white text-center"
        />
        <span className="text-gray-300">and</span>
        <input
          type="number"
          placeholder="100"
          value={max}
          onChange={(e) => setMax(e.target.value)}
          className="w-20 p-2 bg-[#1F1F1F] border border-gray-600 rounded text-white text-center"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div
        onClick={generate}
        className="w-60 h-60 rounded-full bg-green-600 text-white flex items-center justify-center text-4xl font-bold cursor-pointer shadow-xl hover:scale-110 transition-transform duration-300"
      >
        {number ?? '🎲'}
      </div>

      <p className="text-gray-400">Click the ball to generate a number</p>
    </div>
  );
};

export default RandomBall;

// pages/RandomBall.jsx
import React, { useState } from 'react';

const RandomBall = () => {
  const [number, setNumber] = useState(null);

  const generate = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div
        onClick={generate}
        className="w-40 h-40 rounded-full bg-green-600 text-white flex items-center justify-center text-4xl font-bold cursor-pointer shadow-xl animate-spin-slow hover:scale-110 transition-transform"
      >
        {number ?? '🎲'}
      </div>
      <p className="mt-6 text-gray-400">Click the ball to generate a number between 1–100</p>
    </div>
  );
};

export default RandomBall;

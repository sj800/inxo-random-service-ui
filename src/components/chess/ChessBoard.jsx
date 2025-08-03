import React, { useEffect, useState } from 'react';

const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

const getRandomSquare = () => {
  const file = files[Math.floor(Math.random() * 8)];
  const rank = ranks[Math.floor(Math.random() * 8)];
  return `${file}${rank}`;
};

const ChessBoard = () => {
  const [flipped, setFlipped] = useState(false);
  const [highlighted, setHighlighted] = useState(null);
  const [showLabel, setShowLabel] = useState(false);
  const [memorizing, setMemorizing] = useState(false);

  useEffect(() => {
    let timer;
    let labelTimer;

    const runMemorization = () => {
      const cell = getRandomSquare();
      setHighlighted(cell);
      setShowLabel(false);

      labelTimer = setTimeout(() => {
        setShowLabel(true);
        timer = setTimeout(() => {
          if (memorizing) runMemorization();
        }, 3000);
      }, 5000);
    };

    if (memorizing) runMemorization();

    return () => {
      clearTimeout(timer);
      clearTimeout(labelTimer);
    };
  }, [memorizing]);

  const board = (flipped ? [...ranks].reverse() : ranks).map((rank) => (
    <div key={rank} className="flex">
      {(flipped ? [...files].reverse() : files).map((file) => {
        const square = `${file}${rank}`;
        const isLight = (files.indexOf(file) + ranks.indexOf(rank)) % 2 === 0;
        const bgColor = square === highlighted ? 'bg-red-500' : isLight ? 'bg-gray-200' : 'bg-gray-600';

        return (
          <div
            key={square}
            className={`flex items-center justify-center w-full aspect-square text-white text-sm ${bgColor}`}
            style={{ width: '12.5%' }}
          >
            {showLabel && highlighted === square ? square : ''}
          </div>
        );
      })}
    </div>
  ));

  return (
    <div className="p-4 flex flex-col items-center">
      <div className="w-full max-w-screen-sm aspect-square">{board}</div>
      <div className="flex gap-4 mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setFlipped(!flipped)}
        >
          Flip Board
        </button>
        <button
          className={`${
            memorizing ? 'bg-red-600' : 'bg-green-600'
          } text-white px-4 py-2 rounded`}
          onClick={() => setMemorizing((prev) => !prev)}
        >
          {memorizing ? 'Stop Memorization' : 'Start Memorization'}
        </button>
      </div>
    </div>
  );
};

export default ChessBoard;
import React, { useEffect, useState } from 'react';
import {
  FaChessPawn,
  FaChessRook,
  FaChessKnight,
  FaChessBishop,
  FaChessQueen,
  FaChessKing,
} from 'react-icons/fa6';

import { motion, AnimatePresence } from 'framer-motion';

const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

const initialPieces = () => {
  const pieces = {};
  const majorRow = [
    <FaChessRook key="r1" />,
    <FaChessKnight key="n1" />,
    <FaChessBishop key="b1" />,
    <FaChessQueen key="q" />,
    <FaChessKing key="k" />,
    <FaChessBishop key="b2" />,
    <FaChessKnight key="n2" />,
    <FaChessRook key="r2" />,
  ];

  for (let i = 0; i < 8; i++) {
    pieces[`${files[i]}8`] = <span className="text-black">{majorRow[i]}</span>;
    pieces[`${files[i]}7`] = <span className="text-black"><FaChessPawn /></span>;
    pieces[`${files[i]}2`] = <span className="text-white brightness-200"><FaChessPawn /></span>;
    pieces[`${files[i]}1`] = <span className="text-white brightness-200">{majorRow[i]}</span>;
  }
  return pieces;
};

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
  const [piecesVisible, setPiecesVisible] = useState(true);
  const [pieces, setPieces] = useState(initialPieces());
  const [options, setOptions] = useState(['', '', '', '']);
  const [correct, setCorrect] = useState('');
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    let labelTimer;

    const runMemorization = () => {
      const cell = getRandomSquare();
      setHighlighted(cell);
      setShowLabel(false);
      setSelected(null);
      setFeedback('');

      const correctOption = cell;
      const otherOptions = new Set([correctOption]);
      while (otherOptions.size < 4) otherOptions.add(getRandomSquare());
      const shuffled = Array.from(otherOptions).sort(() => Math.random() - 0.5);
      setOptions(shuffled);
      setCorrect(correctOption);

      labelTimer = setTimeout(() => {
        setShowLabel(true);
      }, 5000);
    };

    if (memorizing) runMemorization();

    return () => clearTimeout(labelTimer);
  }, [memorizing]);

  const handleOptionClick = (option) => {
    if (selected === correct) return; // Prevent further clicking after correct

    setSelected(option);

    if (option === correct) {
      setFeedback('🎉 Correct! Great memory!');
      setTimeout(() => {
        if (memorizing) {
          setShowLabel(false);
          setSelected(null);
          setFeedback('');
          const next = getRandomSquare();
          setHighlighted(next);
          const correctOption = next;
          const otherOptions = new Set([correctOption]);
          while (otherOptions.size < 4) otherOptions.add(getRandomSquare());
          const shuffled = Array.from(otherOptions).sort(() => Math.random() - 0.5);
          setOptions(shuffled);
          setCorrect(correctOption);
        }
      }, 2000);
    } else {
      setFeedback('❌ Incorrect Answer');
      setTimeout(() => setFeedback(''), 1500);
    }
  };

  const board = (flipped ? [...ranks].reverse() : ranks).map((rank) => (
    <div key={rank} className="flex w-full">
      {(flipped ? [...files].reverse() : files).map((file) => {
        const square = `${file}${rank}`;
        const isLight = (files.indexOf(file) + ranks.indexOf(rank)) % 2 === 0;
        const bgColor =
          square === highlighted
            ? 'bg-red-500'
            : isLight
            ? 'bg-[#e0c38c]'
            : 'bg-[#5b442f]';

        return (
          <div
            key={square}
            className={`relative flex items-center justify-center aspect-square ${bgColor} text-xl text-black`}
            style={{ width: '12.5%' }}
          >
            {piecesVisible && pieces[square]}
            {showLabel && highlighted === square && (
              <span className="absolute bottom-1 right-1 text-xs font-bold bg-white text-black px-1 rounded">
                {square}
              </span>
            )}
          </div>
        );
      })}
    </div>
  ));

  return (
    <div className="flex-1 bg-[#1e1e1e] text-white p-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-[min(90vmin,700px)] flex flex-col gap-4 items-center">
        <div className="aspect-square w-[80%] shadow-2xl rounded overflow-hidden border-4 border-[#3c3b37] relative">
          {board}
          <AnimatePresence>
            {feedback && (
              <motion.div
                key="feedback"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center z-10"
              >
                <div
                  className={`text-3xl font-bold px-6 py-3 rounded shadow-lg ${
                    feedback.includes('Correct') ? 'bg-green-600' : 'bg-red-600'
                  }`}
                >
                  {feedback}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex gap-4 flex-wrap justify-center">
          <button
            className="bg-[#4a90e2] hover:bg-[#357ab8] transition px-4 py-2 rounded font-semibold"
            onClick={() => setFlipped(!flipped)}
          >
            Flip Board
          </button>
          <button
            className={`${
              memorizing ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
            } transition px-4 py-2 rounded font-semibold`}
            onClick={() => setMemorizing((prev) => !prev)}
          >
            {memorizing ? 'Stop Memorization' : 'Start Memorization'}
          </button>
          <button
            className="bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded font-semibold"
            onClick={() => setPiecesVisible((prev) => !prev)}
          >
            {piecesVisible ? 'Hide Pieces' : 'Show Pieces'}
          </button>
        </div>

        <div className="flex flex-wrap gap-4 justify-center min-h-[60px]">
          {options.map((opt, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 rounded text-white text-sm font-semibold w-16 h-12 transition ${
                selected === opt
                  ? opt === correct
                    ? 'bg-green-600'
                    : 'bg-red-600'
                  : 'bg-gray-700 hover:bg-gray-800'
              }`}
              onClick={() => handleOptionClick(opt)}
              disabled={selected === correct || !opt}
            >
              {opt || ''}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChessBoard;

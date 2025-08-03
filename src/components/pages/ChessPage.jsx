import React from 'react';
import Menu from './Menu';
import ChessBoard from '../chess/ChessBoard';

const ChessPage = () => {
  return (
    <div className="min-h-screen w-screen flex bg-[#0A0A0A] text-white font-sans">
      <Menu />
      <div className="flex-1 flex items-center justify-center">
        <ChessBoard />
      </div>
    </div>
  );
};

export default ChessPage;

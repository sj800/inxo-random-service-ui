import React from 'react';

const HoorayBanner = ({ visible, number }) => {
  if (!visible) return null;

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-[#2B1B00] text-yellow-300 border border-yellow-500 px-6 py-3 rounded-full shadow-2xl text-sm sm:text-base font-semibold flex items-center gap-2 animate-fade-bounce">
        ✨ Yay! <span className="text-white">#{number}</span> got a shiny update!
      </div>
    </div>
  );
};

export default HoorayBanner;

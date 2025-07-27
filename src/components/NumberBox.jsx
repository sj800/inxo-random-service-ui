import React from 'react';

const NumberBox = ({ number, count, isHighlighted, isHighest, boxRef }) => {
  const baseClass =
    'relative rounded-xl p-5 text-center shadow-lg transition-all duration-500 border';
  const defaultStyle = 'bg-[#161616] border-[#2A2A2A] hover:border-[#00FF85]';

  const greenish = 'bg-green-800 border-green-500'; // for highest
  const reddish = 'bg-red-800 border-red-500'; // for incremented

  const styleClass = isHighlighted
    ? greenish
    : isHighest
    ? reddish + ' transition-none'
    : defaultStyle;

  return (
    <div ref={boxRef} className={`${baseClass} ${styleClass}`}>
      {/* Highest badge with tooltip */}
      {isHighest && (
        <div className="absolute top-1 right-2 group">
          <span className="text-yellow-300 text-sm font-bold animate-pulse cursor-default">
            🏆
          </span>
          <div className="absolute top-6 right-0 z-10 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
            Highest count so far
          </div>
        </div>
      )}

      {/* Incremented badge with tooltip */}
      {isHighlighted && (
        <div className="absolute bottom-1 right-2 group">
          <span className="text-red-300 text-sm font-bold animate-fade-in-once cursor-default">
            🔺
          </span>
          <div className="absolute bottom-6 right-0 z-10 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
            Recently incremented
          </div>
        </div>
      )}

      {/* Number */}
      <div className="text-3xl font-bold text-[#00D4FF]">{number}</div>

      {/* Count */}
      <div className="mt-2 text-lg font-bold text-white">{count}</div>
    </div>
  );
};

export default NumberBox;

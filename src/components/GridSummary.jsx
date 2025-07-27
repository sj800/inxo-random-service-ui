import React from 'react';

const GridSummary = ({ totalCount, highest, incremented }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 text-sm">
  {/* Recently Updated */}
  <div className="bg-[#181818] rounded-xl p-3 border-l-4 border-red-500 shadow-md">
    <div className="flex items-center gap-2 text-xs text-red-400">
      🔺 <span className="bg-red-800 text-white px-2 py-0.5 rounded-full text-[10px]">Recently Updated</span>
    </div>
    <div className="text-gray-400 text-[12px]">Number: #{incremented.number}</div>
    <div className="text-red-300 font-semibold">Count: {incremented.count}</div>
  </div>

  {/* Total Count */}
  <div className="bg-[#181818] rounded-xl p-3 border-l-4 border-[#00FF85] shadow-md">
    <div className="text-[#00FF85] text-xs mb-1">📊 Total Count</div>
    <div className="font-bold text-[#00FF85]">{totalCount}</div>
  </div>

  {/* Highest Count */}
  <div className="bg-[#181818] rounded-xl p-3 border-l-4 border-green-500 shadow-md">
    <div className="flex items-center gap-2 text-xs text-yellow-400">
      🏆 <span className="bg-green-800 text-white px-2 py-0.5 rounded-full text-[10px]">Highest Count</span>
    </div>
    <div className="text-gray-400 text-[12px]">Number: #{highest.number}</div>
    <div className="text-green-300 font-semibold">Count: {highest.count}</div>
  </div>
</div>

  );
};

export default GridSummary;

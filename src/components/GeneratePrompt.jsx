import React from 'react';

const GeneratePrompt = ({ onGenerate }) => {
  return (
 <div className="my-10 bg-[#1F1F1F] border border-[#2A2A2A] rounded-xl px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left gap-3 shadow">
  <p className="text-sm sm:text-base text-gray-300">
    Can you make your <span className="text-white font-semibold">favourite number</span> win?
  </p>
  <button
    onClick={onGenerate}
    className="cursor-pointer bg-[#1E3A8A] text-white hover:bg-[#3B82F6] transition-all duration-300 px-5 py-2 rounded-full font-semibold shadow"
  >
    🔁 Generate Again
  </button>
</div>


  );
};

export default GeneratePrompt;
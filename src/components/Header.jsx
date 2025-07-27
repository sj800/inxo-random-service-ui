import React from 'react';
import { SparklesIcon } from 'lucide-react';

const Header = () => (
  <header className="flex flex-col items-center justify-center text-center mb-12">
    <SparklesIcon className="h-12 w-12 text-[#00FF85] animate-pulse mb-3" />
    <h1 className="text-5xl sm:text-6xl font-black tracking-tight bg-gradient-to-r from-[#00FF85] via-[#00D4FF] to-[#FF00A8] text-transparent bg-clip-text mb-4">
      Random Number Pulse
    </h1>
    <p className="text-md sm:text-lg text-gray-400 max-w-xl">
      Every time you visit, we generate a random number from 1–100 and track the hype. Ready to vibe? 🚀
    </p>
  </header>
);

export default Header;

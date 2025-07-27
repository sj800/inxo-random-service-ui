import React, { useEffect, useRef, useState } from 'react';
import NumberBox from './NumberBox';
import GridSummary from './GridSummary';
import HoorayBanner from './HoorayBanner';
import GeneratePrompt from './GeneratePrompt';

const NumberGrid = ({ counts, incrementedNumber, highestCountNumber, loadData }) => {
  const [highlightedNumber, setHighlightedNumber] = useState(null);
  const [showHooray, setShowHooray] = useState(false);
  const boxRefs = useRef([]);

  useEffect(() => {
    if (incrementedNumber != null) {
      const timer = setTimeout(() => {
        setHighlightedNumber(incrementedNumber);
        setShowHooray(true);
        setTimeout(() => setShowHooray(false), 3000);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [incrementedNumber]);

  const highestCount = highestCountNumber ? counts[highestCountNumber - 1] : 0;
  const incrementedCount = incrementedNumber ? counts[incrementedNumber - 1] : 0;
  const totalCount = counts.reduce((sum, n) => sum + n, 0);

  return (
    <div className="relative">
      <HoorayBanner visible={showHooray} number={incrementedNumber} />
      <GridSummary
        totalCount={totalCount}
        highest={{ number: highestCountNumber, count: highestCount }}
        incremented={{ number: incrementedNumber, count: incrementedCount }}
      />
        <GeneratePrompt onGenerate={loadData} />
     

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4">
        {counts.map((count, index) => (
          <NumberBox
            key={index}
            number={index + 1}
            count={count}
            isHighlighted={highlightedNumber === index + 1}
            isHighest={highestCountNumber === index + 1}
            boxRef={(el) => (boxRefs.current[index] = el)}
          />
        ))}
      </div>
    </div>
  );
};

export default NumberGrid;

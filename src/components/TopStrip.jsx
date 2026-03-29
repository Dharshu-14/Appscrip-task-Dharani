import React from 'react';

const TopStrip = () => (
  <div className="bg-black text-white text-xs py-2 px-4 flex justify-center sm:justify-between items-center w-full">
    <div className="hidden sm:flex items-center gap-4 w-full max-w-7xl mx-auto justify-between px-4">
      <div className="flex items-center gap-2"><div className="w-4 h-4 text-red-500">♦</div> Lorem ipsum dolor</div>
      <div className="flex items-center gap-2"><div className="w-4 h-4 text-red-500">♦</div> Lorem ipsum dolor</div>
      <div className="flex items-center gap-2"><div className="w-4 h-4 text-red-500">♦</div> Lorem ipsum dolor</div>
    </div>
    <div className="sm:hidden flex items-center gap-2 mx-auto">
       <div className="w-4 h-4 text-red-500">♦</div> Lorem ipsum dolor
    </div>
  </div>
);

export default TopStrip;
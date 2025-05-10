import React from 'react';

const InputSwitchSkeleton = () => {
  return (
    <div className="animate-pulse flex mb-2">
      <div className="flex-1 flex flex-col gap-2">
        <div className="h-2 bg-[#ADC9CD] rounded w-36"></div>
        <div className=" bg-[#ADC9CD] rounded col-span-2 h-10 p-2"></div>
      </div>
    </div>
  );
};

export default InputSwitchSkeleton;

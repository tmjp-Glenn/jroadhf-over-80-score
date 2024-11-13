import React from 'react';

const ResultCard = () => {
  return (
    <div className="sticky bottom-0 bg-[#87E4DB] border-t-[12px] border-[#00ACB1] w-full drop-shadow-xl py-2  flex flex-row">
      <div className="flex-1 justify-center items-center flex border-r py-9">
        <span className="text-3xl font-bold">123.1</span>
        <sub className="text-xl">Points</sub>
      </div>

      <div className="flex-1 justify-center items-center flex py-9  flex-col">
        <span>
          <span className="text-3xl font-bold">11.1</span>
          <sub className="text-xl">%</sub>
        </span>
        <span>1-year mortality</span>
      </div>
      <div className="flex-1 justify-center items-center flex border-l py-9 flex-col ">
        <span>
          <span className="text-3xl font-bold">11.1</span>
          <sub className="text-xl">%</sub>
        </span>
        <span>3-year mortality</span>
      </div>
    </div>
  );
};

export default ResultCard;

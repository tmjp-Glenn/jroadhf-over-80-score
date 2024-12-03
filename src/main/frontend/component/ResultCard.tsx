import React, { forwardRef } from 'react';
import Loading from './Loading';
import { useTranslation } from 'react-i18next';

interface IResultCard {
  oneYearMortality: number;
  threeyearMortality: number;
  isLoading?: boolean;
  // onClear: () => void;
}

// Use React.forwardRef to forward the ref to the root <div>
const ResultCard = forwardRef<HTMLDivElement, IResultCard>((props, ref) => {
  const { t } = useTranslation('home');
  const { oneYearMortality, threeyearMortality, isLoading } = props;

  return (
    <div
      ref={ref}
      className="animate-slide-up bottom-0 select-none bg-primary w-full py-2 sm:rounded-none rounded-ss-2xl rounded-se-2xl flex justify-center border-t-8 border-secondary-light">
      {isLoading ? (
        <div className="flex-1 justify-center items-center flex py-[100px] ">
          <Loading />
        </div>
      ) : (
        <div className="lg:max-w-4xl w-full items-center justify-center  flex flex-row relative">
          <div className="flex-1 justify-center items-center flex py-9 flex-col">
            <span>
              <span className="sm:text-6xl text-2xl font-black text-white">{oneYearMortality}</span>
              <sub className="sm:text-2xl text-base text-white">%</sub>
            </span>
            <span className="sm:text-2xl font-semibold text-secondary-lighter">{t('result.1_year_mortality')}</span>
          </div>
          {/* <button
            className="bg-white rounded-xl absolute z-10 hover:scale-105 border-[6px] border-primary"
            onClick={onClear}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-primary">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </button> */}
          <div className="flex-1 justify-center items-center flex border-l py-9 flex-col ">
            <span>
              <span className="sm:text-6xl text-2xl font-black text-white">{threeyearMortality}</span>
              <sub className="sm:text-2xl text-base text-white">%</sub>
            </span>
            <span className="sm:text-2xl font-semibold text-secondary-lighter">{t('result.3_year_mortality')}</span>
          </div>
        </div>
      )}
    </div>
  );
});

export default ResultCard;

import React, { forwardRef } from 'react';
import Loading from './Loading';
import { useTranslation } from 'react-i18next';

interface IResultCard {
  oneYearMortality: number;
  threeyearMortality: number;
  isLoading?: boolean;
}

// Use React.forwardRef to forward the ref to the root <div>
const ResultCard = forwardRef<HTMLDivElement, IResultCard>((props, ref) => {
  const { t } = useTranslation('home');
  const { oneYearMortality, threeyearMortality, isLoading } = props;

  return (
    <div
      ref={ref}
      className="animate-slide-up bottom-0 bg-primary w-full py-2 sm:rounded-none rounded-ss-2xl rounded-se-2xl flex justify-center border-t-8 border-secondary-light"
    >
      {isLoading ? (
        <div className="flex-1 justify-center items-center flex py-[100px] ">
          <Loading />
        </div>
      ) : (
        <div className='lg:max-w-4xl w-full  flex flex-row '>
          <div className="flex-1 justify-center items-center flex py-9 flex-col">
            <span>
              <span className="sm:text-6xl text-2xl font-black text-white">{oneYearMortality}</span>
              <sub className="sm:text-2xl text-base text-white">%</sub>
            </span>
            <span className="sm:text-2xl font-semibold text-secondary-lighter">{t('result.1_year_mortality')}</span>
          </div>
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

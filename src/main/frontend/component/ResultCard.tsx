import React from 'react';
import Loading from './Loading';
import { useTranslation } from 'react-i18next';
interface IResultCard {
  oneYearMortality: number;
  threeyearMortality: number;
  isLoading?: boolean;
}
const ResultCard: React.FC<IResultCard> = (props) => {
  const { t } = useTranslation('home');
  const { oneYearMortality, threeyearMortality, isLoading } = props;
  return (
    <div className="animate-slide-up sticky bottom-0 bg-[#005963] w-full py-2  flex flex-row sm:rounded-none rounded-ss-2xl rounded-se-2xl">
      {/* <div className="flex-1 justify-center items-center flex border-r py-9">
        <span className="text-3xl font-bold">123.1</span>
        <sub className="text-xl">Points</sub>
      </div> */}
      {isLoading ? (
        <div className="flex-1 justify-center items-center flex py-[52px] ">
          <Loading />
        </div>
      ) : (
        <>
          <div className="flex-1 justify-center items-center flex py-9  flex-col">
            <span>
              <span className="sm:text-4xl text-2xl  font-black text-white">{oneYearMortality}</span>
              <sub className="sm:text-xl text-base text-white">%</sub>
            </span>
            <span className="font-semibold text-[#ADC9CD]">{t('result.1_year_mortality')}</span>
          </div>
          <div className="flex-1 justify-center items-center flex border-l py-9 flex-col ">
            <span>
              <span className="sm:text-4xl text-2xl font-black text-white">{threeyearMortality}</span>
              <sub className="sm:text-xl text-base text-white">%</sub>
            </span>
            <span className="font-semibold text-[#ADC9CD]">{t('result.3_year_mortality')}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default ResultCard;

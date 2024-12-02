import InputSwitch from 'Frontend/component/InputSwitch';
import ResultCard from 'Frontend/component/ResultCard';
import { calculateMortality } from 'Frontend/generated/DataInputsServiceCallable';
import { useCalculateMortality } from 'Frontend/hooks/useCalculateMortality';
import { useDataInputs } from 'Frontend/hooks/useDataInputs';
import { InputSwitchData } from 'Frontend/types/InputSwitch.type';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation('home');
  const resultCardRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState<{ [key: string]: InputSwitchData }>();
  const handleScrollToResultCard = () => {
    resultCardRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const {
    lnOutAge,
    lnOutAceArbUse,
    lnOutAlbumin,
    lnOutBarthelIndex,
    lnOutBnp,
    lnOutBun,
    lnOutHemoglobin,
    lnOutHistoryHf,
    lnOutSbp,
    lnOutSex,
    lnOutSodium,
    isLoading,
  } = useDataInputs();
  const {
    isCalculationLoading,
    keysLength,
    oneYearMortalityValue = 0,
    threeYearMortalityValue = 0,
  } = useCalculateMortality(inputValue, resultCardRef);

  const onInputSwitchHandler = (e: InputSwitchData) => {
    setInputValue((prev) => ({
      ...prev,
      [e.type as string]: e,
    }));
  };

  const onClear = () => {
    setInputValue({});
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="w-full flex flex-col justify-center items-center relative">
      <div className=" w-full animate-slide-down top-0 z-10 flex-col flex mb-3  pt-4 justify-center items-center p-2 bg-primary border-b-[10px] border-secondary-light drop-shadow-md">
        <span className="sm:text-5xl text-xl font-bold text-secondary-lighter">{t('title')}</span>
        <span className="sm:text-lg text-sm text-secondary-lighter">{t('desc')}</span>
        {/* <div className="flex justify-end pt-2">
          <button
            className="flex flex-row text-sm gap-1  p-1 hover:bg-[#00abb1cc] hover:scale-105 bg-[#00ACB1] rounded-sm text-white justify-center items-center"
            onClick={handleScrollToResultCard}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 text-white">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
            {t('clear')}
          </button>
        </div> */}
      </div>
      <div className="sm:px-14 px-2 lg:max-w-4xl w-full ">
        <InputSwitch
          isLoading={isLoading}
          value={inputValue?.['age']}
          data={lnOutAge}
          label={t('form.label.age')}
          hasSubText
          onSelect={onInputSwitchHandler}
        />
        <InputSwitch
          isLoading={isLoading}
          value={inputValue?.['gender']}
          data={lnOutSex}
          label={t('form.label.sex')}
          onSelect={onInputSwitchHandler}
        />
        <InputSwitch
          isLoading={isLoading}
          value={inputValue?.['barthel_index']}
          data={lnOutBarthelIndex}
          label={t('form.label.barthel_index')}
          isMultiLineLabel
          onSelect={onInputSwitchHandler}
        />
        <InputSwitch
          isLoading={isLoading}
          value={inputValue?.['history_hf']}
          data={lnOutHistoryHf}
          label={t('form.label.history_hf')}
          onSelect={onInputSwitchHandler}
        />
        <InputSwitch
          isLoading={isLoading}
          value={inputValue?.['sbp_admission']}
          data={lnOutSbp}
          label={t('form.label.sbp')}
          hasSubText
          onSelect={onInputSwitchHandler}
        />
        <InputSwitch
          isLoading={isLoading}
          data={lnOutHemoglobin}
          value={inputValue?.['hemoglobin']}
          label={t('form.label.hemoglobin')}
          hasSubText
          onSelect={onInputSwitchHandler}
        />
        <InputSwitch
          isLoading={isLoading}
          data={lnOutAlbumin}
          value={inputValue?.['albumin']}
          label={t('form.label.albumin')}
          hasSubText
          onSelect={onInputSwitchHandler}
        />
        <InputSwitch
          isLoading={isLoading}
          data={lnOutBun}
          value={inputValue?.['bun']}
          label={t('form.label.bun')}
          hasSubText
          onSelect={onInputSwitchHandler}
        />
        <InputSwitch
          isLoading={isLoading}
          data={lnOutBnp}
          value={inputValue?.['bnp']}
          label={t('form.label.bnp')}
          hasSubText
          onSelect={onInputSwitchHandler}
        />
        <InputSwitch
          isLoading={isLoading}
          data={lnOutSodium}
          value={inputValue?.['sodium']}
          label={t('form.label.sodium')}
          hasSubText
          onSelect={onInputSwitchHandler}
        />
        <InputSwitch
          isLoading={isLoading}
          data={lnOutAceArbUse}
          value={inputValue?.['ace_arm_use']}
          label={t('form.label.ace_arm_use')}
          onSelect={onInputSwitchHandler}
        />
      </div>
      {keysLength > 10 && (
        <ResultCard
          ref={resultCardRef}
          isLoading={isCalculationLoading}
          oneYearMortality={Math.max(parseFloat(oneYearMortalityValue.toFixed(1)), 0)}
          threeyearMortality={Math.max(parseFloat(threeYearMortalityValue.toFixed(1)), 0)}
        />
      )}
      {/* { (
        <div className="animate-slide-up sticky bottom-0 bg-[#005963] w-full p-2  flex flex-row text-white font-semibold tracking-wide sm:text-base text-xs">
          {t('please_fill_out')}
        </div>
      )} */}
    </div>
  );
};

export default Home;

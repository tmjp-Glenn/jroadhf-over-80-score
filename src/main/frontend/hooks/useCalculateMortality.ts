import MortalityResult from 'Frontend/generated/com/example/jroadhf/bean/MortalityResult';
import { calculateMortality } from 'Frontend/generated/DataInputsServiceCallable';
import { InputSwitchData } from 'Frontend/types/InputSwitch.type';
import { RefObject, useEffect, useState } from 'react';

export const useCalculateMortality = (inputValue: { [key: string]: InputSwitchData } | undefined,resultCardRef:RefObject<HTMLDivElement>) => {
  const [keys, setKeys] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [mortality, setMortality] = useState<MortalityResult | null>();
  const [isFirstCalculation,setFirstTimeCalculation]=useState<boolean>(true)
  const handleScrollToResultCard = () => {
    resultCardRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const calculate = async () => {
    if (inputValue) {
      const keys = Object.keys(inputValue);
      let totalPoints = 0;
      setKeys(keys);
      if (keys.length > 10) {
        for (const key in inputValue) {
          totalPoints += inputValue[key].value;
        }
        setIsLoading(true);
        const mortalityValue = await calculateMortality(totalPoints);
        setMortality(mortalityValue);
        if(isFirstCalculation){
          handleScrollToResultCard()
          setFirstTimeCalculation(false)
        }
        console.log(totalPoints);
      } else {
        setMortality(null);
      }
    } else {
      setMortality(null);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    calculate();
  }, [inputValue]);

  return {
    keysLength: keys.length,
    isCalculationLoading: isLoading,
    oneYearMortalityValue: mortality?.oneYearMortality,
    threeYearMortalityValue: mortality?.threeYearMortality,
  };
};

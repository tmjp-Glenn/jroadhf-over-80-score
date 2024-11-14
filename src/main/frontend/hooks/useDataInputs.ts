import { FIELDS_TYPE } from 'Frontend/enum/inputFields';
import { DataInputsServiceCallable } from 'Frontend/generated/endpoints';
import { InputSwitchData } from 'Frontend/types/InputSwitch.type';
import { useEffect, useState } from 'react';

export const useDataInputs = () => {
  const [data, setData] = useState<InputSwitchData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getData = async () => {
    try {
      setIsLoading(true);
      const dataValue = await DataInputsServiceCallable.getDataInputs();
      if (dataValue) {
        const inputSwitchData: InputSwitchData[] = dataValue.map((item) => ({
          label: item?.label || '',
          value: item?.value || 0,
          type: item?.type,
        }));
        setData(inputSwitchData);
      } else {
        setData([]);
      }
      setIsLoading(false);
    } catch (error) {
      console.error('Failed to fetch data inputs:', error);
      setData([]); // Optionally reset `data` on error
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return {
    isLoading,
    lnOutAge: data.filter((i) => i?.type == FIELDS_TYPE.AGE),
    lnOutSex: data.filter((i) => i?.type == FIELDS_TYPE.GENDER),
    lnOutBarthelIndex: data.filter((i) => i?.type == FIELDS_TYPE.BARTHEL_INDEX),
    lnOutHistoryHf: data.filter((i) => i?.type == FIELDS_TYPE.HISTORY_HF),
    lnOutSbp: data.filter((i) => i?.type == FIELDS_TYPE.SBP_ADMISSION),
    lnOutHemoglobin: data.filter((i) => i?.type == FIELDS_TYPE.HEMOGLOBIN),
    lnOutAlbumin: data.filter((i) => i?.type == FIELDS_TYPE.ALBUMIN),
    lnOutBun: data.filter((i) => i?.type == FIELDS_TYPE.BUN),
    lnOutBnp: data.filter((i) => i?.type == FIELDS_TYPE.BNP),
    lnOutSodium: data.filter((i) => i?.type == FIELDS_TYPE.SODIUM),
    lnOutAceArbUse: data.filter((i) => i?.type == FIELDS_TYPE.ACE_ARM_USE),
  };
};

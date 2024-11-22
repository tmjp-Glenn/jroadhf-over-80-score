import { InputSwitchData } from 'Frontend/types/InputSwitch.type';
import React, { useState } from 'react';
import { clsx } from 'clsx';
import { Trans, useTranslation } from 'react-i18next';
import InputSwitchSkeleton from './InputSwitchSkeleton';
interface IInputSwictch {
  data: InputSwitchData[];
  label: string;
  hasSubText?: boolean;
  isMultiLineLabel?: boolean;
  onSelect?: (e: InputSwitchData) => void;
  value?: InputSwitchData | null;
  isLoading?: boolean;
}

const InputSwitch: React.FC<IInputSwictch> = (props) => {
  const { data, label, hasSubText, isMultiLineLabel, onSelect, value, isLoading } = props;
  const { t } = useTranslation('inputLabel');
  const onSelectHandler = (selectedData: InputSwitchData) => {
    console.log(selectedData.value, selectedData.label);
    onSelect?.(selectedData);
    // return setSelected(selectedData);
  };

  if (isLoading) {
    return <InputSwitchSkeleton />;
  }
  return (
    <div className="mb-4">
      <span className="pl-2 sm:text-xl font-semibold text-text-primary">{label}</span>
      <div className="rounded-xl flex p-1 relative items-center border-2 gap-2 border-text-secondary">
        {data.map((i) => {
          return (
            <button
              disabled={value?.label == i.label}
              onClick={() => {
                onSelectHandler(i);
              }}
              key={i.value}
              className={clsx(
                'w-full flex justify-center p-[10px] sm:h-14 items-center cursor-pointer',
                value?.label == i.label &&
                'bg-primary  rounded-md text-white font-semibold ease-in-out transition-colors ',
                'hover:ring-2 rounded-md ring-[#9bc5c8]'
              )}>
              <span className="sm:text-lg w-full whitespace-normal break-words  ">
                {t(`${i.type}.${i.label}`)}
                {isMultiLineLabel && (
                  <>
                    <br />
                    {t(`${i.type}.${i.label}_next_line`)}
                  </>
                )}
                {hasSubText && <sub className="sm:text-base"> {t(`${i.type}.sub_text`)}</sub>}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default InputSwitch;

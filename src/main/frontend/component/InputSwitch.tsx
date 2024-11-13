import { InputSwitchData } from 'Frontend/types/InputSwitch.type';
import React, { useState } from 'react';
import { clsx } from 'clsx';
import { Trans, useTranslation } from 'react-i18next';
interface IInputSwictch {
  data: InputSwitchData[];
  label: string;
  hasSubText?: boolean;
  isMultiLineLabel?: boolean;
  onSelect?: (e: InputSwitchData) => void;
}

const InputSwitch: React.FC<IInputSwictch> = (props) => {
  const { data, label, hasSubText, isMultiLineLabel, onSelect } = props;
  const [selected, setSelected] = useState<InputSwitchData | null>(null);
  const { t } = useTranslation('inputLabel');
  const onSelectHandler = (selectedData: InputSwitchData) => {
    onSelect?.(selectedData);
    return setSelected(selectedData);
  };
  return (
    <div className="mb-2">
      <span className="pl-2 font-semibold text-sm">{label}</span>
      <div className="rounded-xl flex p-1 relative items-center border-2 gap-1 ">
        {data.map((i) => {
          return (
            <button
              onClick={() => {
                onSelectHandler(i);
              }}
              key={i.value}
              className={clsx(
                'w-full flex justify-center p-2 sm:h-10 items-center',
                selected?.label == i.label &&
                  'bg-[#005963] rounded-md text-white font-semibold ease-in-out transition-colors ',
                'hover:ring-2 rounded-md ring-[#ADC9CD]'
              )}>
              <span className="text-xs w-full whitespace-normal break-words">
                {t(`${i.type}.${i.label}`)}
                {isMultiLineLabel && (
                  <>
                    <br />
                    {t(`${i.type}.${i.label}_next_line`)}
                  </>
                )}
                {hasSubText && <sub className="sm:text-xs"> {t(`${i.type}.sub_text`)}</sub>}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default InputSwitch;

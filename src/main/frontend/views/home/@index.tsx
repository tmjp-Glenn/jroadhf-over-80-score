import InputSwitch from 'Frontend/component/InputSwitch';
import ResultCard from 'Frontend/component/ResultCard';
import { useDataInputs } from 'Frontend/hooks/useDataInputs';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation('home');
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
  } = useDataInputs();

  return (
    <div className="w-full lg:max-w-4xl relative">
      <div className="sticky top-0 z-10 flex-col flex mb-3 bg-[#87E4DB] pt-4 justify-center p-2 border-b-[12px] border-[#00ACB1] drop-shadow-md">
        <span className="sm:text-2xl text-xl font-bold">{t('title')}</span>
        <span className="sm:text-sm text-xs">{t('desc')}</span>
      </div>
      <div className="px-2">
        <InputSwitch
          data={lnOutAge}
          label={t('form.label.age')}
          hasSubText
          onSelect={(e) => {
            console.log(e, 'SELECT');
          }}
        />
        <InputSwitch
          data={lnOutSex}
          label={t('form.label.sex')}
          onSelect={(e) => {
            console.log(e, 'SELECT');
          }}
        />
        <InputSwitch
          data={lnOutBarthelIndex}
          label={t('form.label.barthel_index')}
          isMultiLineLabel
          onSelect={(e) => {
            console.log(e, 'SELECT');
          }}
        />
        <InputSwitch
          data={lnOutHistoryHf}
          label={t('form.label.history_hf')}
          onSelect={(e) => {
            console.log(e, 'SELECT');
          }}
        />
        <InputSwitch
          data={lnOutSbp}
          label={t('form.label.sbp')}
          hasSubText
          onSelect={(e) => {
            console.log(e, 'SELECT');
          }}
        />
        <InputSwitch
          data={lnOutHemoglobin}
          label={t('form.label.hemoglobin')}
          hasSubText
          onSelect={(e) => {
            console.log(e, 'SELECT');
          }}
        />
        <InputSwitch
          data={lnOutAlbumin}
          label={t('form.label.albumin')}
          hasSubText
          onSelect={(e) => {
            console.log(e, 'SELECT');
          }}
        />
        <InputSwitch
          data={lnOutBun}
          label={t('form.label.bun')}
          hasSubText
          onSelect={(e) => {
            console.log(e, 'SELECT');
          }}
        />
        <InputSwitch
          data={lnOutBnp}
          label={t('form.label.bnp')}
          hasSubText
          onSelect={(e) => {
            console.log(e, 'SELECT');
          }}
        />
        <InputSwitch
          data={lnOutSodium}
          label={t('form.label.sodium')}
          hasSubText
          onSelect={(e) => {
            console.log(e, 'SELECT');
          }}
        />
        <InputSwitch
          data={lnOutAceArbUse}
          label={t('form.label.ace_arm_use')}
          onSelect={(e) => {
            console.log(e, 'SELECT');
          }}
        />
      </div>

      <ResultCard />
    </div>
  );
};

export default Home;

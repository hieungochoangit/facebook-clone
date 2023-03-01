import React from 'react';
import BirthDaySelectField from '@/components/FormControls/SelectField/BirthDaySelectField';
import { DAYS } from '@/utils/birthday';
import { MONTHS } from '@/utils/birthday';
import { YEARS } from '@/utils/birthday';
import { BIRTHDAY_KEYS } from '@/utils/constant';
import { useTranslation } from 'react-i18next';

const BirthdayGroup = (props) => {
  const { t } = useTranslation();
  const { register } = props;

  return (
    <>
      <p className="text-left text-sm">{t('birthday')}</p>
      <div className="flex justify-start gap-3">
        <BirthDaySelectField data={DAYS} register={register} field={BIRTHDAY_KEYS.DAY} className="w-1/4" />
        <BirthDaySelectField data={MONTHS} register={register} field={BIRTHDAY_KEYS.MONTH} className="w-1/4" />
        <BirthDaySelectField data={YEARS} register={register} field={BIRTHDAY_KEYS.YEAR} className="w-1/2" />
      </div>
    </>
  );
};

export default BirthdayGroup;

import React from 'react';
import RadioField from '../../../components/FormControls/RadioField/RadioField';
import { useTranslation } from 'react-i18next';
import ErrorTextField from '@/components/ErrorTextField/ErrorTextField';
import { GENDER_KEYS } from '@/utils/constant';

const GenderGroup = (props) => {
  const { register, errors } = props;
  const { t } = useTranslation();

  return (
    <>
      <p className="text-left text-sm">{t('gender')}</p>
      <div className="grid grid-cols-3 gap-3">
        <RadioField register={register} label={t('male')} errors={errors} value={GENDER_KEYS.MALE} />
        <RadioField register={register} label={t('female')} errors={errors} value={GENDER_KEYS.FEMALE} />
        <RadioField register={register} label={t('other')} errors={errors} value={GENDER_KEYS.OTHER} />
      </div>
    </>
  );
};

export default GenderGroup;

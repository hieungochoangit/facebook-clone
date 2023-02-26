import React from 'react';
import ErrorTextField from '@/components/ErrorTextField/ErrorTextField';
import { useTranslation } from 'react-i18next';

const InputField = (props) => {
  const { t } = useTranslation();
  const { field, register, errors, validateField, ...rest } = props;

  return (
    <div className="my-2">
      <input
        {...register(field, { ...validateField })}
        placeholder={`Nhập vào ${field} của bạn`}
        className={`border outline-0 p-2 w-full rounded-sm ${errors[field] ? 'border-[red]' : ''}`}
        type="text"
        {...rest}
      />
      {errors[field] && <ErrorTextField>{t('login.empty')}</ErrorTextField>}
    </div>
  );
};

export default InputField;

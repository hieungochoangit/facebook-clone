import React from 'react';
import Button from '@/components/Button/Button';
import useHookForm from '@/hooks/useHookForm';
import InputField from '@/components/FormControls/InputField/InputField';
import Loading from '@/components/Loading/Loading';
import CheckboxField from '@/components/FormControls/CheckboxField/CheckboxField';
import { useTranslation } from 'react-i18next';
import { registerSchema } from '@/validations/registerSchema';

const validateField = {
  required: true
};

const RegisterForm = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    onClickSubmit,
    disabled
  } = useHookForm(registerSchema);

  return (
    <form onSubmit={handleSubmit(onClickSubmit)} className="px-6 pt-4">
      <InputField field="email" register={register} validateField={validateField} errors={errors} type="text" />
      <InputField field="password" register={register} validateField={validateField} errors={errors} type="password" />
      <InputField field="rpassword" register={register} validateField={validateField} errors={errors} type="password" />
      <CheckboxField field="confirmTerm" register={register} className="mb-2">
        {t('confirmTerm')}
      </CheckboxField>
      <Button
        disabled={disabled}
        style={{ backgroundColor: disabled ? '#CCC' : '' }}
        type="submit"
        className="bg-primary hover:bg-primaryHover h-10 w-full rounded-sm text-white my-4"
      >
        {disabled ? <Loading /> : t('registerText')}
      </Button>
    </form>
  );
};

export default RegisterForm;

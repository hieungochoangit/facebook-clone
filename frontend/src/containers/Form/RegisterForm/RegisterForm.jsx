import React from 'react';
import Button from '@/components/Button/Button';
import useHookForm from '@/hooks/useHookForm';
import InputField from '@/components/FormControls/InputField/InputField';
import Loading from '@/components/Loading/Loading';
import { useTranslation } from 'react-i18next';
import { registerSchema } from '@/validations/registerSchema';
import BirthdayGroup from '@/containers/BirthdayGroup/BirthdayGroup';

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
      <div className="flex items-center gap-4">
        <InputField field="surname" register={register} validateField={validateField} errors={errors} type="text" />
        <InputField field="lastname" register={register} validateField={validateField} errors={errors} type="text" />
      </div>
      <InputField
        field="phoneOrEmail"
        register={register}
        validateField={validateField}
        errors={errors}
        type="password"
      />
      <InputField field="password" register={register} validateField={validateField} errors={errors} type="password" />

      <BirthdayGroup register={register} />

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

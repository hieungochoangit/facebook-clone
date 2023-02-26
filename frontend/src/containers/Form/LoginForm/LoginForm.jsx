import React from 'react';
import Button from '@/components/Button/Button';
import useHookForm from '@/hooks/useForm';
import InputField from '@/components/FormControls/InputField/InputField';
import Loading from '@/components/Loading/Loading';
import CheckboxField from '@/components/FormControls/CheckboxField/CheckboxField';

const validateField = {
  required: true
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    onClickSubmit,
    disabled
  } = useHookForm();

  return (
    <form onSubmit={handleSubmit(onClickSubmit)} className="px-6 pt-4">
      <InputField field="email" register={register} validateField={validateField} errors={errors} type="text" />
      <InputField field="password" register={register} validateField={validateField} errors={errors} type="password" />
      <CheckboxField field="savepass" register={register} className="mb-2">
        Nhớ mật khẩu
      </CheckboxField>
      <Button
        disabled={disabled}
        style={{ backgroundColor: disabled ? '#CCC' : '' }}
        type="submit"
        className="bg-[#1877f2] h-10 w-full rounded-sm text-white my-4"
      >
        {disabled ? <Loading /> : 'Đăng nhập'}
      </Button>
    </form>
  );
};

export default LoginForm;

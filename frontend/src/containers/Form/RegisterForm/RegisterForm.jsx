import React from 'react';
import Button from '@/components/Button/Button';
import useHookForm from '@/hooks/useHookForm';
import InputField from '@/components/FormControls/InputField/InputField';
import Loading from '@/components/Loading/Loading';
import { useTranslation } from 'react-i18next';
import { registerSchema } from '@/validations/registerSchema';
import BirthdayGroup from '@/containers/BirthdayGroup/BirthdayGroup';
import GenderGroup from './GenderGroup';
import { Link } from 'react-router-dom';

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
    <form onSubmit={handleSubmit(onClickSubmit)} className="px-6 pt-4 max-w-[450px]">
      <div className="flex items-center gap-4">
        <InputField
          field="surname"
          placeholder={t('surname')}
          register={register}
          validateField={validateField}
          errors={errors}
          type="text"
        />
        <InputField
          field="lastname"
          placeholder={t('lastname')}
          register={register}
          validateField={validateField}
          errors={errors}
          type="text"
        />
      </div>
      <InputField
        field="phoneOrEmail"
        placeholder={t('phoneOrEmail')}
        register={register}
        validateField={validateField}
        errors={errors}
        type="text"
      />
      <InputField
        field="password"
        placeholder={t('password')}
        register={register}
        validateField={validateField}
        errors={errors}
        type="password"
      />

      <BirthdayGroup register={register} />

      <GenderGroup register={register} errors={errors} />

      <p className="text-left text-[12px]">
        Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên Facebook.{' '}
        <Link className="text-primary" to="/">
          Tìm hiểu thêm.
        </Link>{' '}
        <br />
        <br /> Bằng cách nhấp vào Đăng ký, bạn đồng ý với{' '}
        <Link className="text-primary" to="/">
          Điều khoản, Chính sách quyền riêng tư
        </Link>{' '}
        và{' '}
        <Link className="text-primay" to="/">
          Chính sách cookie
        </Link>{' '}
        của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.
      </p>

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

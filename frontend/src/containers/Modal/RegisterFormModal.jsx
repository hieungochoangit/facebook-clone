import React from 'react';
import Modal from '@/components/Modal/Modal';
import { Link } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';

import useModal from '../../hooks/useModal';
import Button from '../../components/Button/Button';
import LoginForm from '../Form/LoginForm/LoginForm';
import { useTranslation } from 'react-i18next';
import RegisterForm from '../Form/RegisterForm/RegisterForm';

const RegisterFormModal = () => {
  const { isShowing, toggle } = useModal();
  const { t } = useTranslation();

  return (
    <div>
      <Button
        className="bg-primary hover:bg-primaryHover text-white font-semibold h-10 min-w-[120px] rounded-sm my-4"
        onClick={toggle}
      >
        {t('registerText')}
      </Button>

      <Modal isShowing={isShowing} hide={toggle} header={<HeaderModal hide={toggle} />} footer={<FooterModal />}>
        <RegisterForm />
      </Modal>
    </div>
  );
};

const HeaderModal = ({ hide }) => {
  const { t } = useTranslation();

  return (
    <div className="h-[50px] border-b border-borderColor flex items-center justify-center relative">
      <span>{t('registerText')}</span>
      <span onClick={hide} className="absolute right-4 cursor-pointer">
        <GrClose />
      </span>
    </div>
  );
};

const FooterModal = () => {
  return <></>;
};

export default RegisterFormModal;

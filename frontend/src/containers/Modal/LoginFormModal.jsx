import React from 'react';
import Modal from '@/components/Modal/Modal';
import { Link } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';

import useModal from '../../hooks/useModal';
import Button from '../../components/Button/Button';
import LoginForm from '../Form/LoginForm/LoginForm';
import { useTranslation } from 'react-i18next';

const LoginFormModal = () => {
  const { isShowing, toggle } = useModal();
  const { t } = useTranslation();

  return (
    <>
      <Button
        className="bg-primary hover:bg-primaryHover text-white font-semibold h-10 min-w-[120px] rounded-sm  my-4"
        onClick={toggle}
      >
        {t('loginText')}
      </Button>

      <Modal isShowing={isShowing} hide={toggle} header={<HeaderModal hide={toggle} />} footer={<FooterModal />}>
        <LoginForm />
      </Modal>
    </>
  );
};

const HeaderModal = ({ hide }) => {
  const { t } = useTranslation();

  return (
    <div className="h-[50px] border-b flex items-center justify-center relative">
      <span>{t('login.withFacebook')}</span>
      <span onClick={hide} className="absolute right-4 cursor-pointer">
        <GrClose />
      </span>
    </div>
  );
};

const FooterModal = () => {
  const { t } = useTranslation();

  return (
    <div className="py-4 text-primary text-[17px]">
      <Link to="forgot-password">{t('forgotPassword')}</Link>
    </div>
  );
};

export default LoginFormModal;

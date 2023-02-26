import React from 'react';
import Modal from '@/components/Modal/Modal';
import { Link } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';

import useModal from '../../hooks/useModal';
import Button from '../../components/Button/Button';
import LoginForm from '../Form/LoginForm/LoginForm';

const LoginFormModal = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Button className="bg-[#1877f2] h-10 min-w-[120px] rounded-sm text-white my-4" onClick={toggle}>
        Đăng nhập
      </Button>

      <Modal isShowing={isShowing} hide={toggle} header={<HeaderModal hide={toggle} />} footer={<FooterModal />}>
        <LoginForm />
      </Modal>
    </>
  );
};

const HeaderModal = ({ hide }) => {
  return (
    <div className="h-[50px] border-b flex items-center justify-center relative">
      <span>Đăng nhập Facebook</span>
      <span onClick={hide} className="absolute right-4 cursor-pointer">
        <GrClose />
      </span>
    </div>
  );
};

const FooterModal = () => {
  return (
    <div className="py-4 text-[#1877f2] text-[17px]">
      <Link to="forgot-password">Quên mật khẩu?</Link>
    </div>
  );
};

export default LoginFormModal;

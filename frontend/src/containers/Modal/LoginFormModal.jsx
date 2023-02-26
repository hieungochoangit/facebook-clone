import React from 'react';
import Modal from '@/components/Modal/Modal';
import { Link } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';

import useModal from '../../hooks/useModal';

const LoginFormModal = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <button onClick={toggle}>Loggin</button>

      <Modal isShowing={isShowing} hide={toggle} header={<HeaderModal hide={toggle} />} footer={<FooterModal />}>
        Hello
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

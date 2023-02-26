import React from 'react';
import LoginFormModal from '../../containers/Modal/LoginFormModal';

const Login = () => {
  return (
    <div className="container h-[720px] bg-[#f0f2f5] flex items-center justify-center">
      <div>
        <img className="h-[70px] -mx-5" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="logo" />

        <h2 className="text-[28px]">Đăng nhập gần đây</h2>
        <p className="text-[15px]">Nhấp vào ảnh của bạn hoặc thêm tài khoản.</p>

        <LoginFormModal />
      </div>
    </div>
  );
};

export default Login;

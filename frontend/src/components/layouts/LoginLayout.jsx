import React from 'react';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
  return (
    <div className="login-layout bg-[#f0f2f5]">
      <Outlet />
    </div>
  );
};

export default LoginLayout;

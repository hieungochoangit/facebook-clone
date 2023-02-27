import React from 'react';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
  return (
    <div className="login-layout bg-gradient-to-r from-cyan-400 to-blue-100">
      <Outlet />
    </div>
  );
};

export default LoginLayout;

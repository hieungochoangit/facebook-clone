import React from 'react';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div className="h-screen bg-white">
      <Outlet />
    </div>
  );
};

export default DefaultLayout;

import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import LoginWithSocial from '@/components/LoginWithSocial/LoginWithSocial';
import LoginFormModal from '@/containers/Modal/LoginFormModal';
import RegisterFormModal from '@/containers/Modal/RegisterFormModal';

const Login = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('loginText')}</title>
      </Helmet>
      <div className="container h-screen bg-transparent pt-20">
        <div className="flex items-center justify-center gap-10 flex-col bg-white w-[370px] mx-auto p-10 rounded-xl shadow-xl">
          <div className="w-full">
            <img
              className="h-[70px] mx-auto"
              src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
              alt="logo"
            />

            <h2 className="text-[28px] text-center">{t('login.title')}</h2>
            <p className="text-[15px] text-center">{t('login.desc')}</p>

            <div className="flex items-center justify-between">
              <LoginFormModal />
              <RegisterFormModal />
            </div>
          </div>
          <div>{t('or')}</div>
          <div>
            <LoginWithSocial />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

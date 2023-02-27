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
      <div className="container h-[720px] bg-[#f0f2f5] flex items-center justify-center gap-20 flex-col">
        <div>
          <img className="h-[70px] -mx-5" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="logo" />

          <h2 className="text-[28px]">{t('login.title')}</h2>
          <p className="text-[15px]">{t('login.desc')}</p>

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
    </>
  );
};

export default Login;

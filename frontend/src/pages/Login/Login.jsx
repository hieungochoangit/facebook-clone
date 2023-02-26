import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import LoginFormModal from '../../containers/Modal/LoginFormModal';

const Login = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('loginText')}</title>
      </Helmet>
      <div className="container h-[720px] bg-[#f0f2f5] flex items-center justify-center">
        <div>
          <img className="h-[70px] -mx-5" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="logo" />

          <h2 className="text-[28px]">{t('login.title')}</h2>
          <p className="text-[15px]">{t('login.desc')}</p>

          <LoginFormModal />
        </div>
      </div>
    </>
  );
};

export default Login;

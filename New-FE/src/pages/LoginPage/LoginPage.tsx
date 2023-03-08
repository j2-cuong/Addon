import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '@/features/auth/components/LoginForm';
import AppHelmet from '@components/Helmet';
import AuthLayout from '@layouts/AuthLayout';
import { getPath } from '@/router-paths';

const LoginPage = () => {
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      history.push(getPath('dashboard'));
    }
  }, [history]);

  return (
    <AuthLayout
      title={'Đăng nhập'}
      subTitle={(
        <p>Chưa có tài khoản? <span onClick={() => history.push(getPath('register'))}>Đăng ký</span></p>
      )}
    >
      <AppHelmet title={'Đăng nhập'} />
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
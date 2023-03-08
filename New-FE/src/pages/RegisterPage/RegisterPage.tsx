import React from 'react';
import AuthLayout from '@layouts/AuthLayout';
import { getPath } from '@/router-paths';
import { useHistory } from 'react-router-dom';
import AppHelmet from '@components/Helmet';
import RegisterForm from '@/features/auth/components/RegisterForm';

const RegisterPage = () => {
  const history = useHistory();

  return (
    <AuthLayout
      title={'Đăng ký'}
      subTitle={(
        <p>Đã có tài khoản? <span onClick={() => history.push(getPath('login'))}>Đăng nhập</span></p>
      )}
    >
      <AppHelmet title={'Đăng ký'} />
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
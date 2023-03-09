import React, { useCallback } from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { BarcodeOutlined, UserOutlined } from '@ant-design/icons';
import { FormRow } from '@/features/auth/components/LoginForm/LoginFormStyled';
import { Link, useHistory } from 'react-router-dom';
import { TAuthenticationPayload } from '@/types/authentication';
import { Observer } from 'mobx-react-lite';
import { useStore } from '@/store';
import { getPath } from '@/router-paths';

const LoginForm = () => {
  const { commonStore } = useStore();
  const [form] = Form.useForm();
  const history = useHistory();

  const handleLogin = useCallback((payload: TAuthenticationPayload) => {
    console.log(payload);
    localStorage.setItem('jwt', 'ahihi token test thoi');
    history.push(getPath('dashboard'));
    void message.success('Đăng nhập thành công');
  }, [history]);

  return (
    <Observer>
      {() => {
        const { appTheme } = commonStore;

        return (
          <Form form={form} layout={'vertical'} onFinish={handleLogin}>

            <Form.Item
              name={'partnercode'}
              label={'Mã đại lý'}
              rules={[
                {required: true, message: 'Vui lòng nhập mã đại lý!'},
              ]}
            >
              <Input suffix={<BarcodeOutlined></BarcodeOutlined>}/>
            </Form.Item>

            <Form.Item
              name={'username'}
              label={'Tên đăng nhập'}
              rules={[
                { required: true, message: 'Vui lòng nhập tên đăng nhập!' },
              ]}
            >
              <Input suffix={<UserOutlined></UserOutlined>}/>
            </Form.Item>

            <Form.Item
              name={'password'}
              label={'Mật khẩu'}
              rules={[
                { required: true, message: 'Vui lòng nhập mật khẩu!' },
              ]}
            >
              <Input.Password/>
            </Form.Item>

            <FormRow>
              <Checkbox>Ghi nhớ đăng nhập</Checkbox>
              <Link to={''} style={{ color: appTheme }}>Quên mật khẩu</Link>
            </FormRow>

            <Form.Item>
              <Button block type={'primary'} htmlType={'submit'}>
                Đăng nhập
              </Button>
            </Form.Item>

          </Form>
        );
      }}
    </Observer>
  );
};

export default LoginForm;
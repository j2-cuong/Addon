import React, { useMemo } from 'react';
import { useStore } from '@/store';
import { Button, Checkbox, Form, Input } from 'antd';
import { Observer } from 'mobx-react-lite';
import { AgreementCheckbox } from '@/features/auth/components/RegisterForm/RegisterFormStyled';

const RegisterForm = () => {
  const { commonStore } = useStore();
  const { appTheme } = commonStore;
  const [form] = Form.useForm();

  const isAgreed = Form.useWatch('agreement', form);

  const linkColorStyled = useMemo(() => ({
    style: { color: appTheme },
  }), [appTheme]);

  return (
    <Observer>
      {() => (
        <Form form={form} layout={'vertical'}>
          <Form.Item
            name={'username'}
            label={'Tên đăng nhập'}
            rules={[
              { required: true, message: 'Vui lòng nhập tên đăng nhập!' },
            ]}
          >
            <Input placeholder={'Tên đăng nhập'} />
          </Form.Item>
          <Form.Item
            name='password'
            label='Mật khẩu'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu',
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder={'Mật khẩu'} />
          </Form.Item>
          <Form.Item
            name='confirm'
            label='Xác nhận mật khẩu'
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Vui lòng xác nhận lại mật khẩu đã nhập',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Mật khẩu xác nhận không trùng khớp'));
                },
              }),
            ]}
          >
            <Input.Password placeholder={'Xác nhận mật khẩu'} />
          </Form.Item>
          <Form.Item name={'agreement'} valuePropName='checked'>
            <AgreementCheckbox>
              <Checkbox />
              <p>
                Tôi đồng ý với <a {...linkColorStyled}>điều khoản dịch vụ</a><br />
                và <a {...linkColorStyled}>chính sách bảo mật</a> của 787
              </p>
            </AgreementCheckbox>
          </Form.Item>
          <Form.Item>
            <Button
              block
              type={'primary'}
              htmlType='submit'
              disabled={
                !isAgreed ||
                !form.isFieldsTouched(true) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length).length
              }
            >
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
      )}
    </Observer>
  );
};

export default RegisterForm;
import { Button, Checkbox, Form, Input, message } from 'antd';
import { BarcodeOutlined, UserOutlined } from '@ant-design/icons';
// import { FormRow } from '@/features/auth/components/LoginForm/LoginFormStyled';
import { useHistory } from 'react-router-dom';
import { TAuthenticationPayload } from '@/types/authentication';
import { Observer } from 'mobx-react-lite';
import { useStore } from '@/store';
import { getPath } from '@/router-paths';
import axios from 'axios'
import { API_CODE_RESPONSE, API_STATUS_RESPONSE, MESSAGE_MODAL_VI } from '@/constants/constants';
import {config, ENDPOINT} from '@/config'

const LoginForm = () => {
  const { commonStore } = useStore();
  const [form] = Form.useForm();
  const history = useHistory();

  const handleLogin = (payload : TAuthenticationPayload) => {
    axios.post(config.apiUrl + ENDPOINT.LOGIN, payload, {headers: { 'Content-Type': 'application/json' }}).then((response) => {
      if(response?.data && response.data.status === API_STATUS_RESPONSE.FAIL ) {
        console.log(response.data.data.message)
        const responseMessage = response.data.data.code === API_CODE_RESPONSE.LOGIN_NOT_FOUND ? MESSAGE_MODAL_VI.LOGIN_NOT_FOUND : response.data.data.message
        void message.error(responseMessage)
        return;
      }
      localStorage.setItem('jwt', response.data.token);
      history.push(getPath('dashboard'));
      void message.success(MESSAGE_MODAL_VI.LOGIN_SUCCESS);
    }).catch((error) => {
      console.log(error)
    })
  }
    

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

            {/* <FormRow>
              <Checkbox>Ghi nhớ đăng nhập</Checkbox>
              <Link to={''} style={{ color: appTheme }}>Quên mật khẩu</Link>
            </FormRow> */}

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
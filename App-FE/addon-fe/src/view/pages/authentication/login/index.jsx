import React from "react";
import { Link } from "react-router-dom";

import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../../../redux/auth/loginActions";

export default function Login() {
  const loginauth = useSelector((state) => state.loginAuth)

  
  const dispatch = useDispatch()
  const onFinish = async (values) => {
    const username = values.username.trim();
    const password = values.password.trim();
    dispatch(auth({
      accountName: username,
      accountPass: password,
      clientType:'website',
    }))
   
  };

  return (
    // <Row gutter={[32, 0]} className="hp-authentication-page">
    //   <LeftContent />

    //   <Col lg={12} span={24} className="hp-py-sm-0 hp-py-md-64">
    <Row className="hp-h-100" align="center" justify="center">
      <Col
        xxl={5}
        xl={10}
        lg={20}
        md={20}
        sm={24}
        className="hp-px-sm-8 hp-pt-24 hp-pb-48"
      >

        <h1 className="hp-mb-sm-0">Login</h1>
        <p className="hp-mt-sm-0 hp-mt-8 hp-text-color-black-60">
          Welcome back, please login to your account.
        </p>

        <Form
          onFinish={onFinish}
          layout="vertical"
          name="basic"
          initialValues={{ remember: true }}
          className="hp-mt-sm-16 hp-mt-32"
        >
          <Form.Item
            label="Username :"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
            className="hp-mb-16"
          >
            <Input id="error" />
          </Form.Item>

          <Form.Item
            label="Password :"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
            className="hp-mb-8"
          >
            <Input.Password id="warning2" />
          </Form.Item>

          <Row align="middle" justify="space-between">
            <Form.Item
              name="remember"
              valuePropName="checked"
              className="hp-mb-0"
            >
              <Checkbox name="remember">Remember me</Checkbox>
            </Form.Item>

            <Link
              className="hp-button hp-text-color-black-80 hp-text-color-dark-40"
              to="/pages/authentication/recover-password"
            >
              Forgot Password?
            </Link>
          </Row>
            <Row>{loginauth.message}</Row>
          <Form.Item className="hp-mt-16 hp-mb-8">
            <Button block type="primary" htmlType="submit">
              {!loginauth.loading ? "Đang xác thực" : "Đăng nhập"}
            </Button>
          </Form.Item>
        </Form>

        <Col className="hp-form-info">
          <span className="hp-text-color-black-80 hp-text-color-dark-40 hp-caption hp-mr-4">
            Don’t you have an account?
          </span>

          <Link
            className="hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-caption"
            to="/pages/authentication/register"
          >
            Create an account
          </Link>
        </Col>

        {/* <Col className="hp-or-line hp-text-center hp-mt-32">
          <span className="hp-caption hp-text-color-black-80 hp-text-color-dark-30 hp-px-16 hp-bg-color-black-0 hp-bg-color-dark-100">
            Or
          </span>
        </Col>

        <Col className="hp-account-buttons hp-mt-32">
          <Button
            block
            icon={
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="remix-icon"
              >
                <path
                  d="M3.28826 8.39085L2.82415 10.1235L1.12782 10.1593C0.620865 9.21906 0.333313 8.14325 0.333313 7.00002C0.333313 5.89453 0.602167 4.85202 1.07873 3.93408H1.07909L2.5893 4.21096L3.25086 5.7121C3.1124 6.11578 3.03693 6.54911 3.03693 7.00002C3.03698 7.4894 3.12563 7.95828 3.28826 8.39085Z"
                  fill="#FBBB00"
                />
                <path
                  d="M13.5502 5.75455C13.6267 6.15783 13.6667 6.57431 13.6667 6.99996C13.6667 7.47726 13.6165 7.94283 13.5209 8.39192C13.1963 9.92012 12.3483 11.2545 11.1736 12.1989L11.1733 12.1985L9.27108 12.1014L9.00186 10.4208C9.78134 9.96371 10.3905 9.24832 10.7114 8.39192H7.14655V5.75455H10.7634H13.5502Z"
                  fill="#518EF8"
                />
                <path
                  d="M11.1732 12.1986L11.1736 12.1989C10.0311 13.1172 8.57981 13.6667 6.99997 13.6667C4.46114 13.6667 2.25382 12.2476 1.12781 10.1594L3.28825 8.39087C3.85124 9.89342 5.3007 10.963 6.99997 10.963C7.73036 10.963 8.41463 10.7656 9.00179 10.4209L11.1732 12.1986Z"
                  fill="#28B446"
                />
                <path
                  d="M11.2553 1.86812L9.09558 3.63624C8.4879 3.2564 7.76957 3.03697 6.99999 3.03697C5.26225 3.03697 3.78569 4.15565 3.2509 5.71208L1.0791 3.93406H1.07874C2.18827 1.79486 4.42342 0.333328 6.99999 0.333328C8.61756 0.333328 10.1007 0.909526 11.2553 1.86812Z"
                  fill="#F14336"
                />
              </svg>
            }
          >
            Continue with Google account
          </Button>

          <Button
            className="hp-mt-16"
            block
            icon={
              <RiFacebookFill className="remix-icon hp-text-color-primary-1" />
            }
          >
            Continue with Facebook account
          </Button>
        </Col>

        <Col className="hp-other-links hp-mt-24">
          <a href="#" className="hp-text-color-black-80 hp-text-color-dark-40">
            Privacy Policy
          </a>
          <a href="#" className="hp-text-color-black-80 hp-text-color-dark-40">
            Term of use
          </a>
        </Col> */}
      </Col>
    </Row>
    //   </Col>
    // </Row>
  );
}

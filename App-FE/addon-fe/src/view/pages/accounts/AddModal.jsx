import { SetStateAction, useState } from "react";
import {
  Modal,
  Col,
  Row,
  Divider,
  Input,
  Form,
  Button,
  Select,
  Upload,
  InputNumber,
  Collapse,
  Space,
  TreeSelect,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../../redux/account/accountActions";
// Redux

const AddNewItem = ({ open, close }) => {
  //---------------------------------------------
  const { Option } = Select;
  const [form] = Form.useForm();

  // Redux
  const dispatch = useDispatch();
  let initForm = {
    accountName: "",
    accountPass: "",
    accountEmail: "",
    accountPhone: "",
    isPermission: "3",
    isBlock: "false",
    createBy: "false",
  };
  // Form Finish
  const onFinish = (values) => {
    console.log(values);
    const newData = {
      isPermission: parseInt(values.isPermission),
      isBlock: values.isBlock.toLowerCase() == "true" ? true : false,
      createBy: values.createBy.toLowerCase() == "true" ? true : false,
      clientType: "website",
    };
    const user = { ...values, ...newData };
    console.log(user)
    dispatch(addUser(user)).then(()=>close(false))
  };
  const validateMessages = {
    required: "${label} không được để trống",
    types: {
      email: "${label} không đúng định dạng email",
      number: "${label} không đúng định dạng số",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const handleCancelForm = () => {
    close(false);
    form.resetFields();
  };

  return (
    <Modal
      title="Tài khoản"
      visible={open}
      onCancel={handleCancelForm}
      footer={null}
      width={1000}
      bodyStyle={{ padding: 24 }}
    >
      <Form
        form={form}
        layout="vertical"
        name="basic"
        initialValues={initForm}
        validateMessages={validateMessages}
        onFinish={onFinish}
      >
        <Row gutter={[8, 0]}>
          <Col md={12} span={24}>
            <Form.Item
              name="accountName"
              label="Tên Tài khoản"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col md={12} span={24}>
            <Form.Item
              name="accountPass"
              label="Mật khẩu"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={12} span={24}>
            <Form.Item
              name="accountEmail"
              label="Email"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col md={12} span={24}>
            <Form.Item name="accountPhone" label="Số điện thoại">
              <Input />
            </Form.Item>
          </Col>
          <Col md={8} span={24}>
            <Form.Item name="isPermission" label="Phân quyền">
              <Select placeholder="chọn">
                <Option value="1">Admin</Option>
                <Option value="2">Moderator</Option>
                <Option value="3">Khách Hàng</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col md={8} span={24}>
            <Form.Item name="isBlock" label="Vô hiệu hóa">
              <Select placeholder="chọn...">
                <Option value="true">Admin</Option>
                <Option value="false">Hệ thống</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col md={8} span={24}>
            <Form.Item name="createBy" label="Tạo bởi">
              <Select placeholder="chọn...">
                <Option value="true">Admin</Option>
                <Option value="false">Hệ thống</Option>
              </Select>
            </Form.Item>
          </Col>
          <Divider />

          <Col span={24}>
            <Button type="primary" htmlType="submit" block>
              Lưu
            </Button>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default AddNewItem;

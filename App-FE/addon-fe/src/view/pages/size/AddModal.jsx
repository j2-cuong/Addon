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
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addSize } from "../../../redux/size/sizeActions";
// Redux

const AddNewItem = ({ open, close }) => {
  //---------------------------------------------
  const [form] = Form.useForm();

  // Redux
  const dispatch = useDispatch();
  let initForm = {
    SizeCode: "",
    SizeName: "",
  };
  // Form Finish
  const onFinish = (values) => {
    const convertData = {
      ...values,
      ClientType: 'website'
    }
    dispatch(addSize(convertData)).then(()=>close(false))
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
      title="Tạo màu sắc"
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
              name="sizeCode"
              label="Mã màu"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={12} span={24}>
            <Form.Item
              name="sizeName"
              label="Tên mã"
              rules={[{ required: true }]}
            >
              <Input />
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

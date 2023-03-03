import {
  Button, Col, Divider, Form, Input, Modal, Row, Select
} from "antd";
import { useDispatch } from "react-redux";
import { addCustomer } from "../../../redux/customer/customerActions";
// Redux

const AddNewItem = ({ open, close }) => {
  //---------------------------------------------
  const { Option } = Select;
  const [form] = Form.useForm();

  // Redux
  const dispatch = useDispatch();
  let initForm = {
    customerCode: "",
    customerName: "",
    customerAddress: "",
    customerPhone: "",
    customerType: "true",
    createBy: "1",
  };
  // Form Finish
  const onFinish = (values) => {
    console.log(values);
    const newData = {
      customerType: values.customerType.toLowerCase() == "true" ? true : false,
      clientType: "website",
    };
    const customer = { ...values, ...newData };
    dispatch(addCustomer(customer)).then(()=>close(false))
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
      title="Thêm Khách hàng"
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
              name="customerCode"
              label="Mã Khách Hàng"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col md={12} span={24}>
            <Form.Item
              name="customerName"
              label="Tên Khách Hàng"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col md={12} span={24}>
            <Form.Item
              name="customerAddress"
              label="Địa chỉ"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={12} span={24}>
            <Form.Item
              name="customerPhone"
              label="Số điện thoại"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
    
          <Col md={8} span={24}>
            <Form.Item name="customerType" label="Loại khách hàng">
              <Select placeholder="chọn...">
                <Option value="true">Mua hàng</Option>
                <Option value="false">Bán hàng</Option>
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

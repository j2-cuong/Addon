import {
  Button, Col, Divider, Form, Input, Modal, Row, Select
} from "antd";
import { useDispatch } from "react-redux";
import { addPermission } from "../../../redux/permission/permissionActions";
// Redux

const AddNewItem = ({ open, close }) => {
  //---------------------------------------------
  const { Option } = Select;
  const [form] = Form.useForm();
  const createby = localStorage.getItem("user")
  const currentDate = new Date().toJSON()
  // Redux
  const dispatch = useDispatch();
  let initForm = {
    permissionCode: "",
    permissionName: "",
  };
  // Form Finish
  const onFinish = (values) => {
    console.log(values);
    const newData = {
      clientType: "website",
      createBy: createby,
      createDate: currentDate
    };
    const permission = { ...values, ...newData };
    dispatch(addPermission(permission)).then(()=>close(false))
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
      title="Thêm Phân quyền"
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
              name="permissionCode"
              label="Mã Khách Hàng"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col md={12} span={24}>
            <Form.Item
              name="permissionName"
              label="Tên Khách Hàng"
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

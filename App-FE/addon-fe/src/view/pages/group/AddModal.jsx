import {
  Button, Col, Divider, Form, Input, Modal, Row
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addGroup } from "../../../redux/group/groupActions";
// Redux

const AddNewItem = ({ open, close }) => {
  //---------------------------------------------
  const [form] = Form.useForm();
  const isClose = useSelector((state) => state.group.isClose)
  // Redux
  const dispatch = useDispatch();
  let initForm = {
    GroupCode: "",
    GroupName: "",
  };
  // Form Finish
  const onFinish = (values) => {
    const convertData = {
      ...values,
      ClientType: 'website'
    }
    dispatch(addGroup(convertData)).then(()=>isClose && close())
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
      title="Tạo Nhóm"
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
              name="groupCode"
              label="Mã Nhóm"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={12} span={24}>
            <Form.Item
              name="groupName"
              label="Tên nhóm"
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

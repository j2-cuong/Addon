import {
  Button,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Select,
  Upload,
} from "antd";
import ImgCrop from "antd-img-crop";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import colorApi from "../../../api/colorApi";
import groupApi from "../../../api/groupApi";
import sizeApi from "../../../api/sizeApi";
import {
  getAllData
} from "../../../redux/group/groupActions";
// Redux
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const AddNewItem = ({ open, close }) => {
  //---------------------------------------------
  const { Option } = Select;
  const [form] = Form.useForm();
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [loading, setLoading] = useState(false);
  // Redux
  const dispatch = useDispatch();
  const initParms = {
    clientType: "website",
    pageSize: process.env.REACT_APP_MAX_VALUE,
    pageIndex: 1,
  };
  const fecthAttr = async (api, setData) => {
    await api.get(initParms).then((res) => {
      setData(res.data);
    });
  };
  const handleGetData = async (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(
      getAllData({
        ClientType: "website",
        PageSize: process.env.REACT_APP_MAX_VALUE,
        PageIndex: 1,
      })
    ).then(()=>setLoading(false))
  };
 const group = useSelector((state)=> state.groups)
  let initForm = {
    commodityCode: "",
    commodityName: "",
    commodityPrice: null,
    commodityMemory: null,
    commodityPromotion: "",
    size: null,
    color: null,
    group: null,
    showHide: null,
    hightLight: null,
    describe: "",
    listImages: [
      {
        cT_ColorID: "",
        cT_SizeID: "",
        imgStr: "",
      },
    ],
    createBy: "",
    createDate: "",
  };
  // Get list File Ảnh
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const [fileListDetail, setFileListDetail] = useState([]);
  console.log(previewImage);
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const handleCancel = () => setPreviewOpen(false);
  const onPreviewDetail = async (file) => {
    console.log(file);
    console.log(previewOpen);
    if (!file.url && !file.preview) {
      console.log("here");
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    console.log(previewImage);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  // Form Finish
  const onFinish = (values) => {
    console.log(values);
    const newData = {
      clientType: "website",
    };
    const customer = { ...values, ...newData };
    console.log(customer);
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
    <>
      <Modal
        visible={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
      <Modal
        title="Thêm Hàng hóa"
        visible={open}
        onCancel={handleCancelForm}
        footer={null}
        style={{ top: 5 }}
        width={"100%"}
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
            <Col md={8} span={24}>
              <Form.Item
                name="commodityCode"
                label="Mã Hàng"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col md={8} span={24}>
              <Form.Item
                name="commodityName"
                label="Tên Hàng Hóa"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col md={8} span={24}>
              <Form.Item name="commodityPrice" label="Giá bán">
                <InputNumber
                  style={{ width: "100%" }}
                  formatter={(value) =>
                    `đ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value) => value.replace(/\đ\s?|(,*)/g, "")}
                />
              </Form.Item>
            </Col>

            <Col md={8} span={24}>
              <Form.Item
                name="commodityMemory"
                label="Bộ nhớ"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col md={8} span={24}>
              <Form.Item name="commodityPromotion" label="Giảm giá">
                <InputNumber
                  style={{ width: "100%" }}
                  min={0}
                  max={100}
                  formatter={(value) => `${value}%`}
                  parser={(value) => value?.replace("%", "")}
                />
              </Form.Item>
            </Col>

            <Col md={8} span={24}>
              <Form.Item name="group" label="Nhóm">
                <Select
                  placeholder="chọn..."
                  loading={loading}
                  onMouseDown={handleGetData}
                >
                  {group?.data.map((group) => (
                    <Option key={group.GroupID} value={group.GroupCode}>
                      {group.GroupName}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col md={8} span={24}>
              <Form.Item name="size" label="Size">
                <Select placeholder="chọn...">
                  {size?.map((size) => (
                    <Option key={size.SizeID} value={size.SizeCode}>
                      {size.SizeName}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col md={8} span={24}>
              <Form.Item name="color" label="Màu sắc">
                <Select placeholder="chọn...">
                  {color?.map((color) => (
                    <Option key={color.ColorID} value={color.ColorCode}>
                      {color.ColorName}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col md={8} span={24}>
              <Row gutter={[8, 0]} align-items={"center"}>
                <Col md={12} span={24}>
                  <Checkbox onChange={onChange}>Ẩn/Hiện</Checkbox>
                </Col>
                <Col md={8} span={24}>
                  <Checkbox onChange={onChange}>Nổi bật</Checkbox>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Form.Item name="describe" label="Mô tả sản phẩm">
                <Input.TextArea />
              </Form.Item>
            </Col>
            <Col span={12}>
              <ImgCrop rotate>
                <Upload
                  accept=".png,.jpeg,.jpg"
                  action={"http://localhost:3000/"}
                  listType="picture-card"
                  onChange={handleChange}
                  onPreview={onPreviewDetail}
                  beforeUpload={(file) => {
                    console.log(file);
                    return false;
                    // return new Promise((resolve) => {
                    //   const reader = new FileReader();
                    //   reader.readAsDataURL(file);
                    //   reader.onload = () => {
                    //     const img = document.createElement("img");
                    //     img.src = reader.result;
                    //     img.onload = () => {
                    //       const canvas = document.createElement("canvas");
                    //       canvas.width = img.naturalWidth;
                    //       canvas.height = img.naturalHeight;
                    //       const ctx = canvas.getContext("2d");
                    //       ctx.drawImage(img, 0, 0);
                    //       // ctx.fillStyle = 'red';
                    //       ctx.textBaseline = "middle";
                    //       ctx.font = "33px Arial";
                    //       ctx.fillText("Toàn Dev", 20, 20);
                    //       canvas.toBlob((result) => resolve(result));
                    //     };
                    //   };
                    // });
                  }}
                >
                  {fileList.length < 3 && "+ Upload"}
                </Upload>
              </ImgCrop>
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
    </>
  );
};

export default AddNewItem;

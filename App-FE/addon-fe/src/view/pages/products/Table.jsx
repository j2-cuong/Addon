import {
  DeleteOutlined,
  DownOutlined,
  EditOutlined,
  SaveOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import {
  Badge,
  Button,
  Dropdown,
  Form,
  Input,
  Popconfirm,
  Select,
  Space,
  Table,
} from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getAllData,
} from "../../../redux/product/productActions";
import { getColumnSearchProps } from "../../../ultis/renderprops";
const items = [
  {
    key: "1",
    label: "Action 1",
  },
  {
    key: "2",
    label: "Action 2",
  },
];
const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  valueSelector,
  ...restProps
}) => {
  const inputNode =
    inputType === "select" ? (
      <Select placeholder="chọn" key={index}>
        {valueSelector.map((value, index) => {
          return (
            <Select.Option key={index} value={value.subvalue}>
              {value.text}
            </Select.Option>
          );
        })}
      </Select>
    ) : (
      <Input />
    );
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const ProductList = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [form] = Form.useForm();
  const searchInput = useRef(null);
  const [editingKey, setEditingKey] = useState("");
  const [loading, setLoading] = useState(false);
  const isEditing = (record) => record.key === editingKey;
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const listItem = [];
  const edit = (record) => {
    form.setFieldsValue({
      commodityCode: "",
      commodityName: "",
      commodityPrice: 0,
      commodityMemory: "",
      commodityPromotion: 0,
      describe: "",
      createBy: null,
      ...record,
    });
    setEditingKey(record.key);
  };
  const cancel = () => {
    setEditingKey("");
  };
  const handleDelete = (record) => {
    console.log(record);
    const paramApi = {
      CommodityID: record,
      clientType: "website",
    };
    dispatch(deleteProduct(paramApi));
  };

  for (let i = 0; i < product.data?.length; ++i) {
    console.log(product.data[i].listImages);
    listItem.push({
      key: i,
      image: product.data[i]?.listImages,
    });
  }
  function refreshData() {
    setLoading(true);
    dispatch(
      getAllData({
        clientType: "website",
        pageSize: process.env.REACT_APP_MAX_VALUE,
        pageIndex: 1,
        typeCondition: 1,
        typeGet: 1,
      })
    ).then(() => setLoading(false));
  }
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const columns = [
    {
      title: "Mã hàng hóa",
      dataIndex: "commodityCode",
      key: "commodityCode",
      width: "12%",
      ...getColumnSearchProps(
        "commodityCode",
        searchedColumn,
        searchInput,
        handleSearch,
        searchText,
        handleReset,
        setSearchText,
        setSearchedColumn
      ),
    },
    {
      title: "Tên Hàng hóa",
      dataIndex: "commodityName",
      key: "commodityName",
      width: "12%",
      ...getColumnSearchProps(
        "commodityName",
        searchedColumn,
        searchInput,
        handleSearch,
        searchText,
        handleReset,
        setSearchText,
        setSearchedColumn
      ),
    },
    {
      title: "Giá bán",
      dataIndex: "commodityPrice",
      key: "commodityPrice",
      width: "10%",
      ...getColumnSearchProps(
        "commodityPrice",
        searchedColumn,
        searchInput,
        handleSearch,
        searchText,
        handleReset,
        setSearchText,
        setSearchedColumn
      ),
    },
    {
      title: "Giá giảm",
      dataIndex: "commodityPromotion",
      key: "commodityPromotion",
      width: "10%",
      ...getColumnSearchProps(
        "commodityPromotion",
        searchedColumn,
        searchInput,
        handleSearch,
        searchText,
        handleReset,
        setSearchText,
        setSearchedColumn
      ),
    },
    {
      title: "Bộ nhớ",
      dataIndex: "commodityMemory",
      key: "commodityMemory",
      width: "10%",
      ...getColumnSearchProps(
        "commodityMemory",
        searchedColumn,
        searchInput,
        handleSearch,
        searchText,
        handleReset,
        setSearchText,
        setSearchedColumn
      ),
    },
    {
      title: "Mô tả",
      dataIndex: "describe",
      key: "describe",
      width: "10%",
      ...getColumnSearchProps(
        "describe",
        searchedColumn,
        searchInput,
        handleSearch,
        searchText,
        handleReset,
        setSearchText,
        setSearchedColumn
      ),
    },
    {
      title: "Size",
      dataIndex: "describe",
      key: "describe",
      width: "10%",
      ...getColumnSearchProps(
        "describe",
        searchedColumn,
        searchInput,
        handleSearch,
        searchText,
        handleReset,
        setSearchText,
        setSearchedColumn
      ),
    },
    {
      title: "Nổi bật",
      dataIndex: "hightLight",
      key: "hightLight",
      width: "8%",
      ...getColumnSearchProps(
        "hightLight",
        searchedColumn,
        searchInput,
        handleSearch,
        searchText,
        handleReset,
        setSearchText,
        setSearchedColumn
      ),
    },
    {
      title: "Ẩn/hiện",
      dataIndex: "showHide",
      key: "showHide",
      width: "5%",
      ...getColumnSearchProps(
        "showHide",
        searchedColumn,
        searchInput,
        handleSearch,
        searchText,
        handleReset,
        setSearchText,
        setSearchedColumn
      ),
    },
    {
      title: "Thao tác",
      width: "10%",
      fixed: "right",
      render: (_, record) => {
        const editable = isEditing(record);
        return (
          <>
            {editable ? (
              <span>
                <Button
                  type="text"
                  onClick={() => save(record.key)}
                  icon={<SaveOutlined />}
                  style={{
                    marginRight: 8,
                  }}
                />

                <Popconfirm title="Bạn có chắc muốn hủy?" onConfirm={cancel}>
                  <Button
                    type="text"
                    icon={<CloseOutlined />}
                    style={{
                      marginRight: 8,
                    }}
                  />
                </Popconfirm>
              </span>
            ) : (
              <Button
                // style={{borderRadius:'50%',border:'1px solid',padding:'-5px',minHeight:'30px',minWidth:'30px'}}
                type="link"
                icon={<EditOutlined />}
                disabled={editingKey !== ""}
                onClick={() => edit(record)}
              ></Button>
            )}
            <Popconfirm
              title="Bạn có chắc muốn xóa không?"
              onConfirm={() => handleDelete(record.commodityID)}
            >
              <Button type="link" shape="round" icon={<DeleteOutlined />} />
            </Popconfirm>
          </>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: "text",
        dataIndex: col.dataIndex,
        title: col.title,
        valueSelector: col?.filters,
        editing: isEditing(record),
      }),
    };
  });
  const data = [];
  for (let i = 0; i < product.data?.length; ++i) {
    data.push({
      key: i,
      commodityID: product.data[i]?.CommodityID,
      commodityCode: product.data[i]?.CommodityCode,
      commodityName: product.data[i]?.CommodityName,
      commodityPrice: product.data[i]?.CommodityPrice,
      commodityMemory: product.data[i]?.CommodityMemory,
      commodityPromotion: product.data[i]?.CommodityPromotion,
      listImage: product.data[i]?.listImages,
      showHide: product.data[i]?.ShowHide === true ? "Ẩn" : "Hiện",
      hightLight: product.data[i]?.HightLight === true ? "Hiện" : "Ẩn",
      describe: product.data[i]?.Describe,
      createBy: product.data[i]?.CreateBy,
    });
  }

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      console.log(isNumeric(row.customerphone));
      if (isNumeric(row.customerphone) === false) {
        return message.error("Số điện thoại không hợp lệ");
      }
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        console.log(item);
        const newData2 = { ...item, ...row };
        console.log(newData2);
        const dataApi = {
          CustomerID: newData2.id,
          CustomerCode: newData2.customercode,
          CustomerName: newData2.customername,
          CustomerAddress: newData2.customeraddress,
          CustomerPhone: newData2.customerphone,
          CustomerType:
            newData2.customertype.toLowerCase() == "true" ? true : false,
          createBy: newData2.createBy.toLowerCase() == "true" ? true : false,
          UpdateBy: "true",
          clientType: "website",
        };
        dispatch(updateCustomer(dataApi));
        setEditingKey("");
      } else {
        newData.push(row);
        console.log(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };
  useEffect(() => {
    refreshData();
  }, [dispatch]);
  const nestedColumns = [
    {
      title: "Color",
      dataIndex: "color",
    },
    {
      title: "Size",
      dataIndex: "size",
    },
    {
      title: "Ảnh sản phẩm",
      dataIndex: "image",
    },
  ];
  return (
    <>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        expandable={{
          rowExpandable: (record) => true,
          indentSize: 9,
          showExpandColumn: true,
          expandedRowRender: (record) => {
            const dataResource = [];
            for (let i = 0; i < record.listImage?.length; ++i) {
              dataResource.push({
                key: i,
                size: record.listImage[i]?.CT_SizeID,
                color: record.listImage[i]?.CT_ColorID,
                image: record.listImage[i]?.CommodityImageID,
              });
            }
            return (
              <Table
                columns={nestedColumns}
                size={"small"}
                footer={false}
                pagination={{
                  position: ["none", "none"],
                }}
                dataSource={dataResource}
              ></Table>
            );
          },
        }}
        pagination={{
          onChange: cancel,
        }}
        size={"small"}
        loading={loading}
        rowClassName="editable-row"
        columns={mergedColumns}
        dataSource={data}
        scroll={{ x: "calc(500px + 50%)" }}
      />
    </>
  );
};
export default ProductList;

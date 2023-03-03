import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import {
  Button,
  Form, Input, message, Popconfirm, Select, Table
} from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCustomer,
  getAllData, updateCustomer
} from "../../../redux/customer/customerActions";
import { isNumeric } from "../../../ultis/helper";

import { getColumnSearchProps } from "../../../ultis/renderprops";

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
const CustomerList = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [form] = Form.useForm();
  const searchInput = useRef(null);
  const [editingKey, setEditingKey] = useState("");
  const [loading, setLoading] = useState(false);
  const isEditing = (record) => record.key === editingKey;
  const edit = (record) => {
    form.setFieldsValue({
     customerCode:'',
     customerName:'',
     customerAddress:'',
     customerPhone:'',
     customerType:null,
     createBy:'',
      ...record,
    });
    setEditingKey(record.key);
  };
  const cancel = () => {
    setEditingKey("");
  };
  const handleDelete = (record) => {
    console.log(record);
    const paramApi={
      CustomerID: record.id,
      clientType:'website'
    }
    dispatch(deleteCustomer(paramApi))
  }
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customer);
  function refreshData() {
    setLoading(true)
    dispatch(
      getAllData({
        clientType: "website",
        pageSize: process.env.REACT_APP_MAX_VALUE,
        pageIndex: 1,
      })
    ).then(()=>setLoading(false))
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
      title: "Mã Khách Hàng",
      dataIndex: "customercode",
      width: "12.5%",
      ...getColumnSearchProps(
        "customercode",
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
      title: "Tên Khách Hàng",
      dataIndex: "customername",
      width: "12.5%",
      editable: true,
      ...getColumnSearchProps(
        "customername",
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
      title: "Địa chỉ",
      dataIndex: "customeraddress",
      width: "12.5%",
      editable: true,
      ...getColumnSearchProps(
        "customeraddress",
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
      title: "Số điện thoại",
      width: "12.5%",
      dataIndex: "customerphone",
      editable: true,
      ...getColumnSearchProps(
        "customerphone",
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
      title: "Loại khách hàng",
      width: "12.5%",
      dataIndex: "customertype",

      filters: [
        {
          text: "Mua hàng",
          value: "Mua Hàng",
          subvalue: "true",
        },
        {
          text: "Bán hàng",
          value: "Bán Hàng",
          subvalue: "false",
        }
      ],
      onFilter: (value, record) => record.customertype?.indexOf(value) === 0,
    },
    {
      title: "Tạo bởi",
      dataIndex: "createBy",
      width: "12.5%",
      filters: [
        {
          text: "Admin",
          value: "Admin",
          subvalue: "false",
        },
        {
          text: "Hệ Thống",
          value: "Hệ Thống",
          subvalue: "true",
        },
      ],
      onFilter: (value, record) => record.createBy?.indexOf(value) === 0,
    },
    {
      title: "Hành động",
      width: "12.5%",
      render: (_, record) => {
        const editable = isEditing(record);
        return (
          <>
          {
            editable ? (
              <span>
                <Button
                type="text"
                  onClick={() => save(record.key)}
                  style={{
                    marginRight: 8,
                  }}
                >
                  Lưu
                </Button>
                <Popconfirm title="Bạn có chắc muốn hủy?" onConfirm={cancel}>
                <Button
                type="text"
                  style={{
                    marginRight: 8,
                  }}
                >
                  Hủy
                </Button>
                </Popconfirm>
              </span>
            ) : (
              <Button
              type="link"
              icon={<EditOutlined />}
                disabled={editingKey !== ""}
                onClick={() => edit(record)}
              >
                Sửa
              </Button>
            )
          }
          <Popconfirm title="Bạn có chắc muốn xóa không?" onConfirm={() => handleDelete(record)}>
          <Button
            type="link"
            shape="round"
            icon={<DeleteOutlined />}
          >
            Xóa
          </Button>
          </Popconfirm>
   
        </>
        )
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
        inputType:
          col.dataIndex === "customertype" ||
          col.dataIndex === "createBy"
            ? "select"
            : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        valueSelector: col?.filters,
        editing: isEditing(record),
      }),
    };
  });
  const data = [];
  for (let i = 0; i <= customers.data?.length - 1; i++) {
    data.push({
      key: i,
      id: customers.data[i]?.CustomerID,
      customercode: customers.data[i]?.CustomerCode,
      customername: customers.data[i]?.CustomerName,
      customeraddress: customers.data[i]?.CustomerAddress,
      customerphone: customers.data[i]?.CustomerPhone,
      customertype: customers.data[i]?.customerType === true ? "Mua hàng" : "Bán Hàng",
      createBy: customers.data[i]?.CreateBy === true ? "Hệ Thống" : "Admin",
    });
  }
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      console.log(isNumeric(row.customerphone))
      if(isNumeric(row.customerphone) === false){
        return message.error("Số điện thoại không hợp lệ")
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
          CustomerType: newData2.customertype.toLowerCase() == "true" ? true : false,
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
  return (
    <>
      <Form form={form} component={false}>
        <Table
          bordered
          size="small"
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          pagination={{
            onChange: cancel,
          }}
          loading={loading}
          rowClassName="editable-row"
          columns={mergedColumns}
          dataSource={data}
          scroll={{ x: "calc(500px + 50%)" }}
        />
      </Form>
    </>
  );
};
export default CustomerList;

import { EditOutlined } from "@ant-design/icons";
import {
  Button,
  Form, Input, Popconfirm, Select, Table
} from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllData, updateUser
} from "../../../redux/account/accountActions";

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
const AccountList = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const searchInput = useRef(null);
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record.key === editingKey;
  const edit = (record) => {
    form.setFieldsValue({
      accountPass: "",
      accountEmail: "",
      accountPhone: "",
      isPermission: null,
      isBlock: null,
      createBy: null,
      ...record,
    });
    setEditingKey(record.key);
  };
  const cancel = () => {
    setEditingKey("");
  };
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.account);
  function refreshData() {
    setLoading(true)
    dispatch(
      getAllData({
        ClientType: "website",
        PageSize: process.env.REACT_APP_MAX_VALUE,
        PageIndex: 1,
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
      title: "Tên Tài Khoản",
      dataIndex: "username",
      width: "12.5%",
      ...getColumnSearchProps(
        "username",
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
      title: "Mật khẩu",
      width: "12.5%",
      dataIndex: "password",
      editable: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "12.5%",
      editable: true,
      ...getColumnSearchProps(
        "email",
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
      dataIndex: "phone",
      editable: true,
      ...getColumnSearchProps(
        "phone",
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
      title: "Phân quyền",
      width: "12.5%",
      dataIndex: "role",
      editable: true,
      filters: [
        {
          text: "Admin",
          value: "Admin",
          subvalue: "Admin",
        },
        {
          text: "Moderator",
          value: "Moderator",
          subvalue: "Moderator",
        },
        {
          text: "Khách hàng",
          value: "Khách hàng",
          subvalue: "Khách hàng",
        },
      ],
      onFilter: (value, record) => record.role?.indexOf(value) === 0,
    },
    {
      title: "Vô hiệu hóa",
      dataIndex: "isBlocked",
      width: "12.5%",
      editable: true,
      filters: [
        {
          text: "Bình Thường",
          value: "Bình Thường",
          subvalue: "true",
        },
        {
          text: "Khóa",
          value: "Khóa",
          subvalue: "false",
        },
      ],
      onFilter: (value, record) => record.isBlocked?.indexOf(value) === 0,
    },
    {
      title: "Tạo bởi",
      dataIndex: "createBy",
      width: "12.5%",
      editable: true,
      filters: [
        {
          text: "Admin",
          value: "Admin",
          subvalue: "true",
        },
        {
          text: "Hệ Thống",
          value: "Hệ Thống",
          subvalue: "false",
        },
      ],
      onFilter: (value, record) => record.createBy?.indexOf(value) === 0,
    },
    {
      title: "Hành động",
      width: "12.5%",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
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
        inputType:
          col.dataIndex === "role" ||
          col.dataIndex === "isBlocked" ||
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
  for (let i = 0; i <= accounts.data?.length -1; i++) {
    data.push({
      key: i,
      id: accounts.data[i]?.AccountID,
      username: accounts.data[i]?.AccountName,
      password: accounts.data[i]?.AccountPass,
      email: accounts.data[i]?.AccountEmail,
      phone: accounts.data[i]?.AccountPhone,
      role:
        accounts.data[i]?.isPermission === 0
          ? "Admin"
          : accounts.data[i]?.isPermission === 1
          ? "Moderator"
          : accounts.data[i]?.isPermission === 2
          ? "Khách hàng"
          : null,
      isBlocked:
        accounts.data[i]?.isBlock === true ? (
          <p style={{ color: "green" }}>Bình Thường</p>
        ) : (
          <p style={{ color: "red" }}>Khóa</p>
        ),
      createBy: accounts.data[i]?.CreateBy === true ? "Hệ Thống" : "Admin",
    });
  }
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        console.log(item);
        const newData2 = { ...item, ...row };
        console.log(newData2);
        const dataApi = {
          AccountID: newData2.id,
          AccountPass: newData2.password,
          AccountEmail: newData2.email,
          AccountPhone: newData2.phone,
          isPermission:
            newData2.role === "Admin"
              ? 1
              : newData2.role === "Moderator"
              ? 2
              : 3,
          isBlock: newData2.isBlocked.toLowerCase() == "true" ? true : false,
          createBy: newData2.createBy.toLowerCase() == "true" ? true : false,
          clientType: "website",
        };
        dispatch(updateUser(dataApi));
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
export default AccountList;

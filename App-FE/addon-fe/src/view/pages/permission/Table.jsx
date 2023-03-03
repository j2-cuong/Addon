import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Form, Input, Popconfirm, Table } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePermission,
  getAllData,
  updatePermission
} from "../../../redux/permission/permissionActions";

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
  const inputNode = <Input />;
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
const PermissionList = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [form] = Form.useForm();
  const searchInput = useRef(null);
  const [editingKey, setEditingKey] = useState("");
  const [loading, setLoading] = useState(false);
  const isEditing = (record) => record.key === editingKey;
  const dispatch = useDispatch();
  const permissions = useSelector((state) => state.permission);
  const edit = (record) => {
    form.setFieldsValue({
      permissionCode: "",
      permissionName: "",
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
      permissionID: record.id,
      clientType: "website",
    };
    dispatch(deletePermission(paramApi));
  };

  function refreshData() {
    setLoading(true)
    dispatch(
      getAllData({
        clientType: "website",
        typeCondition: 1,
        pageSize: process.env.REACT_APP_MAX_VALUE,
        pageIndex: 1,
        typeCondition: 1,
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
      title: "Mã Phân quyền",
      dataIndex: "permissioncode",
      width: "12.5%",
      ...getColumnSearchProps(
        "permissioncode",
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
      title: "Tên Phân quyền",
      dataIndex: "permissionname",
      width: "12.5%",
      editable: true,
      ...getColumnSearchProps(
        "permissionname",
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
      title: "Hành động",
      width: "12.5%",
      render: (_, record) => {
        const editable = isEditing(record);
        return (
          <>
            {editable ? (
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
            )}
            <Popconfirm
              title="Bạn có chắc muốn xóa không?"
              onConfirm={() => handleDelete(record)}
            >
              <Button type="link" shape="round" icon={<DeleteOutlined />}>
                Xóa
              </Button>
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
  for (let i = 0; i <= permissions.data?.length - 1; i++) {
    data.push({
      key: i,
      id: permissions.data[i]?.permissionID,
      permissioncode: permissions.data[i]?.permissionCode,
      permissionname: permissions.data[i]?.permissionName,
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
        const user = localStorage.getItem("user");
        const currentDate = new Date().toJSON();
        const dataApi = {
          permissionID: newData2.id,
          permissionCode: newData2.permissioncode,
          permissionName: newData2.permissionname,
          updateBy: user,
          updateDate: currentDate,
          clientType: "website",
        };
        console.log(dataApi)
        dispatch(updatePermission(dataApi));
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
            pageSize:10,
            total:permissions?.TotalCount
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
export default PermissionList;

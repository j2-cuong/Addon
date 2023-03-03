import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import {
  Button,
  Form, Input, Popconfirm, Select, Table
} from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSize,
  getAllData, updateSize
} from "../../../redux/size/sizeActions";

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
const SizeList = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [form] = Form.useForm();
  const searchInput = useRef(null);
  const [editingKey, setEditingKey] = useState("");
  const [loading, setLoading] = useState(false);

  const isEditing = (record) => record.key === editingKey;
  const edit = (record) => {
    form.setFieldsValue({
      sizeCode: "",
      sizeName: "",
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };
  const dispatch = useDispatch();
  const size = useSelector((state) => state.size);
  useEffect(() => {
    console.log(size)
  }, [size])
  
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
  const handleDelete = (record) => {
    const paramApi={
      SizeID: record.id,
      clientType:'website'
    }
    dispatch(deleteSize(paramApi))
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
      title: "Mã Size",
      dataIndex: "sizecode",
      width: "40%",
      ...getColumnSearchProps(
        "sizecode",
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
      title: "Tên Size",
      dataIndex: "sizename",
      width: "40%",
      editable: true,
      ...getColumnSearchProps(
        "sizename",
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
      width: "20%",
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
      console.log(col.dataIndex)
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType:"text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  const data = [];
  for (let i = 0; i <= size.data?.length -1; i++) {
    data.push({
      key: i,
      id: size.data[i]?.SizeID,
      sizecode: size.data[i]?.SizeCode,
      sizename: size.data[i]?.SizeName,
    });
  }
  useEffect( async () => {
    refreshData()
  }, [dispatch]);

 
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
          sizeID: newData2.id,
          sizeCode: newData2.sizecode,
          sizeName: newData2.sizename,
          clientType: "website",
        };
        dispatch(updateSize(dataApi));
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
export default SizeList;

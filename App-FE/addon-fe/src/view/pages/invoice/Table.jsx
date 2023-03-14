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
  deleteInvoice,
  getAllData,
} from "../../../redux/invoice/invoiceActions";
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
const InvoiceList = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [form] = Form.useForm();
  const searchInput = useRef(null);
  const [editingKey, setEditingKey] = useState("");
  const [loading, setLoading] = useState(false);
  const isEditing = (record) => record.key === editingKey;
  const edit = (record) => {
    form.setFieldsValue({
      InvoiceType: "",
      InvoiceNumber: "",
      InvoiceIssuedDate: 0,
      ExchangeRate: "",
      CurrencyCode: 0,
      Ma_KH: "",
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
    dispatch(deleteInvoice(paramApi));
  };
  const dispatch = useDispatch();
  const invoice = useSelector((state) => state.invoice);
  function refreshData() {
    setLoading(true)
    dispatch(
      getAllData({
        clientType: "website",
        pageSize: 10,
        pageIndex: 1,
        typeGet: 1,
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
      title: "Loại HD",
      dataIndex: "InvoiceType",
      key: "InvoiceType",
      width: "150px",
      ...getColumnSearchProps(
        "InvoiceType",
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
      title: "Số HD",
      dataIndex: "InvoiceNumber",
      key: "InvoiceNumber",
      width: "150px",
      ...getColumnSearchProps(
        "InvoiceNumber",
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
      title: "Ngày lập HD",
      dataIndex: "InvoiceIssuedDate",
      key: "InvoiceIssuedDate",
       width: "150px",
      ...getColumnSearchProps(
        "InvoiceIssuedDate",
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
      title: "Tiền tệ",
      dataIndex: "CurrencyCode",
      key: "CurrencyCode",
       width: "150px",
      ...getColumnSearchProps(
        "CurrencyCode",
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
      title: "Tỉ lệ đổi",
      dataIndex: "ExchangeRate",
      key: "ExchangeRate",
       width: "150px",
      ...getColumnSearchProps(
        "ExchangeRate",
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
      title: "Mã KH",
      dataIndex: "Ma_KH",
      key: "Ma_KH",
       width: "150px",
      ...getColumnSearchProps(
        "Ma_KH",
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
      title: "Tên KH",
      dataIndex: "Ten_KH",
      key: "Ten_KH",
       width: "150px",
      ...getColumnSearchProps(
        "Ten_KH",
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
      title: "Địa chỉ",
      dataIndex: "Dia_Chi",
      key: "Dia_Chi",
        width: "150px",
      ...getColumnSearchProps(
        "Dia_Chi",
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
      title: "Email",
      dataIndex: "Email",
      key: "Email",
        width: "150px",
      ...getColumnSearchProps(
        "Email",
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
      title: "Số DT",
      dataIndex: "NumberPhone",
      key: "NumberPhone",
      width: "150px",
      ...getColumnSearchProps(
        "NumberPhone",
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
      title: "Tài khoản NH",
      dataIndex: "BankAccount",
      key: "BankAccount",
       width: "150px",
      ...getColumnSearchProps(
        "BankAccount",
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
      title: "Tên Ngân hàng",
      dataIndex: "BankName",
      key: "BankName",
       width: "150px",
      ...getColumnSearchProps(
        "BankName",
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
      title: "Phương thức TT",
      dataIndex: "PaymentMethodName",
      key: "PaymentMethodName",
       width: "150px",
      ...getColumnSearchProps(
        "PaymentMethodName",
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
      title: "Trạng thái",
      dataIndex: "Trang_thai",
      key: "Trang_thai",
       width: "150px",
      ...getColumnSearchProps(
        "Trang_thai",
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
      title: "Giá trước thuế",
      dataIndex: "TotalAmountWithoutVat",
      key: "TotalAmountWithoutVat",
       width: "150px",
      ...getColumnSearchProps(
        "TotalAmountWithoutVat",
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
      dataIndex: "DiscountAmount",
      key: "DiscountAmount",
        width: "150px",
      ...getColumnSearchProps(
        "DiscountAmount",
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
      title: "Phí VAT",
      dataIndex: "VatAmount",
      key: "VatAmount",
        width: "150px",
      ...getColumnSearchProps(
        "VatAmount",
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
      title: "Thành tiền",
      dataIndex: "TotalAmount",
      key: "TotalAmount",
        width: "150px",
      ...getColumnSearchProps(
        "TotalAmount",
        searchedColumn,
        searchInput,
        handleSearch,
        searchText,
        handleReset,
        setSearchText,
        setSearchedColumn
      ),
    },  {
      title: "Số Bảo mật",
      dataIndex: "sobaomat",
      key: "sobaomat",
      width: "150px",
      ...getColumnSearchProps(
        "sobaomat",
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
       width: "150px",
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
  for (let i = 0; i < invoice.data?.length; ++i) {
    data.push({
      key: i,
      InvoiceAuth_id: invoice.data[i]?.InvoiceAuth_id,
      InvoiceType: invoice.data[i]?.InvoiceType,
      InvoiceNumber: invoice.data[i]?.InvoiceNumber,
      InvoiceIssuedDate: invoice.data[i]?.InvoiceIssuedDate,
      CurrencyCode: invoice.data[i]?.CurrencyCode,
      ExchangeRate: invoice.data[i]?.ExchangeRate,
      Ma_KH: invoice.data[i]?.Ma_KH,
      Ten_KH: invoice.data[i]?.Ten_KH,
      Dia_Chi: invoice.data[i]?.Dia_Chi,
      Email:invoice.data[i]?.Email,
      NumberPhone: invoice.data[i]?.NumberPhone,
      BankAccount: invoice.data[i]?.BankAccount,
      BankName: invoice.data[i]?.BankName,
      PaymentMethodName: invoice.data[i]?.PaymentMethodName,
      Trang_thai: invoice.data[i]?.Trang_thai,
      User_new: invoice.data[i]?.User_new,
      Date_new: invoice.data[i]?.Date_new,
      User_edit: invoice.data[i]?.User_edit,
      Date_edit: invoice.data[i]?.Date_edit,
      TotalAmountWithoutVat: invoice.data[i]?.TotalAmountWithoutVat,
      DiscountAmount: invoice.data[i]?.DiscountAmount,
      VatAmount: invoice.data[i]?.VatAmount,
      TotalAmount: invoice.data[i]?.TotalAmount,
      sobaomat:  invoice.data[i]?.sobaomat,
      details: invoice.data[i]?.details
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
      title: "STT",
      dataIndex: "stt_rec0",
      width:'150px',
    },
    {
      title: "Mã hàng",
      dataIndex: "ItemCode",
      width:'150px',
    },
    {
      title: "Tên hàng",
      dataIndex: "ItemName",
      width:'150px',
    },
    {
      title: "Giá gốc",
      dataIndex: "UnitName",
      width:'150px',
    },
    {
      title: "Số lượng",
      dataIndex: "Quantity",
      width:'150px',
    },
    {
      title: "Tiền trước thuế",
      dataIndex: "TotalAmountWithoutVat",
      width:'150px',
    },
    {
      title: "Phần trăm thuế",
      dataIndex: "VatPercentage",
      width:'150px',
    },
    {
      title: "Tiền thuế",
      dataIndex: "VatAmount",
      width:'150px',
    },
    {
      title: "Phần trăm giảm giá",
      dataIndex: "inv_discountPercentage",
      width:'150px',
    },
    {
      title: "Tiền giảm giá",
      dataIndex: "inv_discountAmount",
      width:'150px',
    },
    {
      title: "Thành tiền",
      dataIndex: "TotalAmount",
      width:'150px',
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
            for (let i = 0; i < record.details?.length; ++i) {
              dataResource.push({
                key: i,
                InvoiceDetail_ID: record.details[i]?.InvoiceDetail_ID,
                InvoiceAuth_id: record.details[i]?.InvoiceAuth_id,
                stt_rec0: record.details[i]?.stt_rec0,
                ItemCode: record.details[i]?.ItemCode,
                ItemName: record.details[i]?.ItemName,
                UnitName: record.details[i]?.UnitName,
                UnitPrice: record.details[i]?.UnitPrice,
                Quantity: record.details[i]?.Quantity,
                TotalAmountWithoutVat: record.details[i]?.TotalAmountWithoutVat,
                VatPercentage: record.details[i]?.VatPercentage,
                VatAmount: record.details[i]?.VatAmount,
                inv_discountPercentage: record.details[i]?.inv_discountPercentage,
                inv_discountAmount: record.details[i]?.inv_discountAmount,
                TotalAmount: record.details[i]?.TotalAmount
              });
            }
            return (
              <Table
              scroll={{ x: "calc(500px + 50%)" }}
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
          onChange: cancel
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
export default InvoiceList;

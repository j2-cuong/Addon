import { Button, Col, Input, Row, Table } from "antd";
import React from "react";
import BreadCrumbs from "../../../layout/components/content/breadcrumbs";

import { RiRefundLine, RiSearch2Line } from "react-icons/ri";

import { useDebouncedCallback } from "use-debounce";
import "./index.css";
import { useState } from "react";
import AddNewItem from "./AddModal";
import { useDispatch } from "react-redux";
import { getAllData, searchByID } from "../../../redux/group/groupActions";
import GroupList from "./Table";

export default function Groups() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
const dispatch = useDispatch();
  const handleSearchFindByID = useDebouncedCallback((val) =>{
    fetchData(val)
  },1000)
  const handleChange = (e) =>{
    e.preventDefault()
    const val = e.target.value
    if(!val){
      dispatch(getAllData({
        ClientType: "website",
        PageSize: process.env.REACT_APP_MAX_VALUE,
        PageIndex: 1,
      }))
    }
    setSearchTerm(val)
    handleSearchFindByID(val)
  }

 function fetchData(param) {
    console.log(true)
    if(!param) return
    dispatch(searchByID({
      ClientType:'website',
      GroupID:param
    })).then(()=>{
      console.log(false)
    })
 }
  return (
   
    <>
      <div className="hp-mb-32">
        <Row gutter={[32, 32]} justify="space-between">
          <BreadCrumbs
            breadCrumbParent="Danh mục"
            breadCrumbActive="Kích thước"
          />
          <Col md={15} span={24}>
            <Row justify="end" align="middle" gutter={[16]}>
              <Col xs={24} md={12} xl={8}>
                <Input
                  placeholder="Nhập vào id : vd(xxxx-xxx-xxx-xxxx)"
                  prefix={
                    <RiSearch2Line
                      set="curved"
                      size={16}
                      className="hp-text-color-black-80"
                    />
                  }
                  value={searchTerm}
                  onChange={handleChange}
                />
              </Col>

              <Col>
                <Button
                  block
                  className="hp-mt-sm-16"
                  type="primary"
                  onClick={() => setIsOpen(true)}
                  icon={<RiRefundLine size={16} className="remix-icon" />}
                >
                  Thêm Mới
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <GroupList searchValue={searchTerm}/>
      {isOpen && <AddNewItem open={isOpen} close={setIsOpen} />}
    </>
  );
}

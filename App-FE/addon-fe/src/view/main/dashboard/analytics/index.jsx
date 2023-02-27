import React from "react";

import { Row, Col } from "antd";

import OrderColumnCardVertical from "../../widgets/cards/statistics/orderColumnCardVertical";
import ActiveUserCardVertical from "../../widgets/cards/statistics/activeUserCardVertical";
import SubsColumnCardVertical from "../../widgets/cards/statistics/subsColumnCardVertical";
import CustomerSupportCardVertical from "../../widgets/cards/statistics/customerSupportCardVertical";
import AnalyticsProjectTableCard from "./analyticsProjectTableCard";
import AnalyticsVisitersLineCard from "./analyticsVisitersLineCard";

export default function Analytics() {
  return (
    <Row gutter={[32, 0]}>
      <Col span={24} className="hp-my-32">
        <Row gutter={[32, 0]}>
          <Col flex="1" className="hp-overflow-hidden">
            <Row gutter={[32, 32]}>
              <Col span={24}>
                <AnalyticsVisitersLineCard />
              </Col>

              <Col md={6} span={12} className="hp-overflow-hidden">
                <OrderColumnCardVertical />
              </Col>

              <Col md={6} span={12} className="hp-overflow-hidden">
                <ActiveUserCardVertical />
              </Col>

              <Col md={6} span={12} className="hp-overflow-hidden">
                <SubsColumnCardVertical />
              </Col>

              <Col md={6} span={12} className="hp-overflow-hidden">
                <CustomerSupportCardVertical />
              </Col>
              <Col span={24}>
                <AnalyticsProjectTableCard />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

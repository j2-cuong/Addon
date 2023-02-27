import { Col, Layout, Row } from "antd";
const { Footer } = Layout;

import themeConfig from '../../../configs/themeConfig.jsx';

export default function MenuFooter() {
  
  const today = new Date();
  const year = today.getFullYear();


  return (
    <Footer className="hp-bg-color-black-10 hp-bg-color-dark-100">
      <Row align="middle" justify="space-between">
        <Col md={12} span={24}>
          <p className="hp-badge-text hp-mb-0 hp-text-color-dark-30">
            COPYRIGHT ©{year}, Phát triển bở MetaTrip
          </p>
        </Col>

        <Col md={12} span={24} className="hp-mt-sm-8 hp-text-sm-center hp-text-right">
          <a
            href="https://trello.com/b/8ZRmDN5y/yoda-roadmap"
            target="_blank"
            className="hp-badge-text hp-text-color-dark-30"
          >
            Version: {themeConfig.version}
          </a>
        </Col>
      </Row>
    </Footer>
  );
};
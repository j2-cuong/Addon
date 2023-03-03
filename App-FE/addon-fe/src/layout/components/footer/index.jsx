import { Col, Layout, Row } from "antd";
const { Footer } = Layout;

import themeConfig from '../../../configs/themeConfig.jsx';

export default function MenuFooter() {
  return (
    <Footer className="hp-bg-color-black-10 hp-bg-color-dark-100">
      <Row align="middle" justify="space-between">
        <Col md={12} span={24}>
          <p className="hp-badge-text hp-mb-0 hp-text-color-dark-30">
            Development by Nguyễn Hữu Cường - Version: {themeConfig.version}
          </p>
        </Col>
      </Row>
    </Footer>
  );
};
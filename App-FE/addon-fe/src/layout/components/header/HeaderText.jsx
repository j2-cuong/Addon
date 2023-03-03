import { Col } from "antd";

export default function HeaderText() {
  return (
    <Col
      xl={16}
      lg={14}
      className="hp-header-left-text hp-d-flex-center"
    >
      <p className="hp-header-left-text-item hp-input-label hp-text-color-black-100 hp-text-color-dark-0 hp-ml-16 hp-mb-0 ">
        <span className="hp-font-weight-300 hp-text-color-danger-3 ">
          Business - App
        </span>
      </p>
    </Col>
  );
};
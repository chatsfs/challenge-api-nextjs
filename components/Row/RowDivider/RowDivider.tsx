import { Col, Row } from 'antd';
import React, { FC } from 'react';
import S from './RowDivider.module.scss';

type RowDividerProps = {
  style?: React.CSSProperties;
};

const RowDivider: FC<RowDividerProps> = ({ style }) => {
  return (
    <Row className={S.row} style={{ ...(style || {}) }}>
      <Col span={24} className={S.col}>
        <span className={S.divider} />
      </Col>
    </Row>
  );
};

export default RowDivider;

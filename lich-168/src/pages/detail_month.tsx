import React, { useState } from "react";
import { useTheme, Text, Grid } from "zmp-ui";
import { Col, Row } from 'antd';
import { tuan2 } from '../pages/calendar_month';
const Detail: React.FC = () => {
  const [theme] = useTheme();
  const [data, setData] = useState<string[][]>([]);
  const renderRow = (rowIndex: number) => {
    return (
      <Grid >
        <Row className="grid_column grid_header">
          <Col className="grid_column" span={3}><Text>T2</Text></Col>
          <Col className="grid_column" span={3}><Text>T3</Text></Col>
          <Col className="grid_column" span={3}><Text>T4</Text></Col>
          <Col className="grid_column" span={3}><Text>T5</Text></Col>
          <Col className="grid_column" span={3}><Text>T6</Text></Col>
          <Col className="grid_column" span={3}><Text>T7</Text></Col>
          <Col className="grid_column" span={3}><Text>CN</Text></Col>
        </Row>

        <Row className="grid_column">
          <Col className="grid_column" span={3}>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
          </Col>
          <Col className="grid_column" span={3}>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
          </Col>
          <Col className="grid_column" span={3}>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
          </Col>
          <Col className="grid_column" span={3}>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
          </Col>
          <Col className="grid_column" span={3}>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>

          </Col>
          <Col className="grid_column" span={3}>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
          </Col>
          <Col className="grid_column" span={3}>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
          </Col>

        </Row>

        <Row className="grid_column">
          <Col className="grid_column" span={3}>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
            <Row className="grid_column"><Text className="text">{"iuouioui564654654645oiuouio"}</Text></Row>
          </Col>
          <Col className="grid_column" span={3}>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
          </Col>
          <Col className="grid_column" span={3}>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
          </Col>
          <Col className="grid_column" span={3}>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
          </Col>
          <Col className="grid_column" span={3}>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>

          </Col>
          <Col className="grid_column" span={3}>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
          </Col>
          <Col className="grid_column" span={3}>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
            <Row className="grid_column"><Text className="text">{tuan2.startDate}</Text></Row>
          </Col>

        </Row>
      </Grid>
    );
  };

  return (
    <div>
      {renderRow(0)}
    </div>
  );
};

export default Detail;

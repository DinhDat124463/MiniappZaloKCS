import React, { useState } from "react";
import { useTheme, Text, Page, Grid, Center, Box } from "zmp-ui";
import { Col, Row, Button } from 'antd';
import { project } from '../pages/add_Schedule';
import { tuan2 } from '../pages/calendar_month';
const Detail: React.FC = () => {
  const [theme] = useTheme();
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [selectedColumn, setSelectedColumn] = useState<number | null>(null);
  const [data, setData] = useState<string[][]>([]);
  const [data2, setData2] = useState<string[][]>([]);

  const renderRow = (rowIndex: number) => {
    return (
      <Grid >
        <Row className="grid_column">
          <Col className="grid_column" span={3}><Text>Thời gian</Text></Col>
          <Col className="grid_column" span={3}><Text>T2</Text></Col>
          <Col className="grid_column" span={3}><Text>T3</Text></Col>
          <Col className="grid_column" span={3}><Text>T4</Text></Col>
          <Col className="grid_column" span={3}><Text>T5</Text></Col>
          <Col className="grid_column" span={3}><Text>T6</Text></Col>
          <Col className="grid_column" span={3}><Text>T7</Text></Col>
          <Col className="grid_column" span={3}><Text>CN</Text></Col>
        </Row>
        <Row className="grid_column">
          <Col className="grid_column" span={3}><Text>Sáng</Text></Col>
          <Col className="grid_column" span={3}><Text>{tuan2.startDate}</Text></Col>
          <Col className="grid_column" span={3}><Text>{data[1]}</Text></Col>
          <Col className="grid_column" span={3}><Text>{data[2]}</Text></Col>
          <Col className="grid_column" span={3}><Text>{data[3]}</Text></Col>
          <Col className="grid_column" span={3}><Text>{data[4]}</Text></Col>
          <Col className="grid_column" span={3}><Text>{data[5]}</Text></Col>
          <Col className="grid_column" span={3}><Text>{data[6]}</Text></Col>
        </Row>
        <Row className="grid_column">
          <Col className="grid_column" span={3}><Text>Chiều</Text></Col>
          <Col className="grid_column" span={3}><Text>{data2[0]}</Text></Col>
          <Col className="grid_column" span={3}><Text>{data2[1]}</Text></Col>
          <Col className="grid_column" span={3}><Text>{data2[2]}</Text></Col>
          <Col className="grid_column" span={3}><Text>{}</Text></Col>
          <Col className="grid_column" span={3}><Text>{data2[4]}</Text></Col>
          <Col className="grid_column" span={3}><Text>{data2[5]}</Text></Col>
          <Col className="grid_column" span={3}><Text>{data2[6]}</Text></Col>
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

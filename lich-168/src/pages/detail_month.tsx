import React, { useState, useEffect } from "react";
import { useTheme, Text, Grid } from "zmp-ui";
import { Col, Row } from 'antd';
import { getFakeData, DaySchedule } from './data'; // Import hàm và kiểu dữ liệu từ tệp fakeData.ts
import { getScale } from './data';
import moment from 'moment';

const scaleValue = getScale().scale;

const Detail: React.FC = () => {
  const [theme] = useTheme();
  const [data, setData] = useState<DaySchedule[][]>([]);
  const [scale, setScale] = useState<number>(4); // State để lưu trữ tỷ lệ, mặc định là 1
  const rowHeight = 30;
  useEffect(() => {
    const weeks = [getFakeData()];
    setData(weeks); // Cập nhật dữ liệu vào state với 3 tuần
  }, []);

  const renderWeek = (weekData: DaySchedule[], weekIndex: number) => {
    return (
      <div key={weekIndex}>
        <Grid>
          <Row className="grid_column grid_header">
            <Col className="grid_column" span={3}><Text>T2</Text></Col>
            <Col className="grid_column" span={3}><Text>T3</Text></Col>
            <Col className="grid_column" span={3}><Text>T4</Text></Col>
            <Col className="grid_column" span={3}><Text>T5</Text></Col>
            <Col className="grid_column" span={3}><Text>T6</Text></Col>
            <Col className="grid_column" span={3}><Text>T7</Text></Col>
            <Col className="grid_column" span={3}><Text>CN</Text></Col>
          </Row>

          <Row className="grid_column_row">
            {weekData.map((dayData, dayIndex) => (
              <Col key={dayIndex} className="grid_column" span={3}>
                <Row className="grid_column_row" style={{ height: rowHeight * scaleValue }}>

                  {dayData.morning.map((event, eventIndex) => {
                    // Tách chuỗi event thành giờ bắt đầu và kết thúc
                    const [startTimeStr, endTimeStr] = event.split('-').map(time => time.trim());

                    // Chuyển đổi thành đối tượng moment
                    const startTime = moment(startTimeStr, 'HH:mm');
                    const endTime = moment(endTimeStr, 'HH:mm');

                    // Tính toán khoảng thời gian giữa startTime và endTime
                    const duration = moment.duration(endTime.diff(startTime));
                    const totalMinutes = duration.asMinutes(); // tổng số phút
                    const totalHoursDecimal = totalMinutes / 60; // số giờ dưới dạng thập phân

                    console.log(`Khoảng thời gian là: ${totalHoursDecimal} giờ`);
                    return (
                      <div key={eventIndex} className="event">
                        <Text className="text">{startTimeStr}</Text>
                        <Text className="text">{endTimeStr}</Text>
                      </div>
                    );
                  })}
                </Row>
              </Col>
            ))}
          </Row>



          <Row className="grid_column_row">
            {weekData.map((dayData, dayIndex) => (
              <Col key={dayIndex} className="grid_column" span={3}>
                <Row className="grid_column_row" style={{ height: rowHeight * scaleValue }}>
                  {dayData.afternoon.map((event: string, eventIndex: number) => {
                    // Tách chuỗi event thành giờ bắt đầu và kết thúc
                    const [startTime, endTime] = event.split('-');
                    return (
                      <div key={eventIndex} className="event">
                        <Text className="text">{startTime.trim()}</Text>
                        <Text className="text">{endTime.trim()}</Text>
                      </div>
                    );
                  })}
                </Row>
              </Col>
            ))}
          </Row>

        </Grid>
      </div>
    );
  };

  return (
    <div>
      {data.map((weekData, weekIndex) => renderWeek(weekData, weekIndex))}
    </div>
  );
};

export default Detail;

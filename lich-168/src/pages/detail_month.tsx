import React, { useState, useEffect } from "react";
import { useTheme, Text, Grid } from "zmp-ui";
import { Col, Row } from 'antd';
import { getFakeData, DaySchedule } from './data'; // Import hàm và kiểu dữ liệu từ tệp fakeData.ts
import { getScale } from './data';
import { getEarliestTime } from './data';

import moment from 'moment';

const scaleValue = getScale().scale;
const morningEarliest = getEarliestTime().morningEarliest;
const afternoonEarliest = getEarliestTime().afternoonEarliest;

const getTimeInDecimal = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number); // Tách giờ và phút, chuyển đổi sang số
  return hours + minutes / 60; // Trả về số thập phân đại diện cho thời gian từ 00:00
};
const Detail: React.FC = () => {
  const [data, setData] = useState<DaySchedule[][]>([]);
  useEffect(() => {
    const weeks = [getFakeData()];
    setData(weeks);
  }, []);
  const renderWeek = (weekData: DaySchedule[], weekIndex: number) => {
    return (
      <div key={weekIndex}>
        <Grid>
          <Row className="grid_column grid_header">
            <Col className="grid_column " span={3}><div className="text_clm" >T2</div></Col>
            <Col className="grid_column text_clm" span={3}><div className="text_clm" >T3</div></Col>
            <Col className="grid_column text_clm" span={3}><div className="text_clm" >T4</div></Col>
            <Col className="grid_column text_clm" span={3}><div className="text_clm" >T5</div></Col>
            <Col className="grid_column text_clm" span={3}><div className="text_clm" >T6</div></Col>
            <Col className="grid_column text_clm" span={3}><div className="text_clm" >T7</div></Col>
            <Col className="grid_column texttd" span={3}><div className="text_clm" >CN</div></Col>
          </Row>





















          <Row className="grid_column_row">
            {weekData.map((dayData, dayIndex) => (
              <Col key={dayIndex} className="grid_column" span={3}>

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
                  const startDecimal = getTimeInDecimal(startTimeStr);

                  // Tính chênh lệch thời gian
                  const timeDifference = startDecimal - morningEarliest;
                  console.log(`Cheenh thời gian là: ${timeDifference.toFixed(2)}`);
                  console.log(`Khoảng thời gian là: ${totalHoursDecimal.toFixed(2)} giờ`);
                  return (
                    <div key={eventIndex} className="event">
                      <Row style={{ height: 10 + scaleValue * timeDifference * 20 }}>
                      </Row>
                      <Row className="grid_column_row" style={{ height: 50 + 20 * scaleValue * totalHoursDecimal }}>
                        <Text className="text">{startTimeStr}</Text>
                        <Text className="text">{endTimeStr}</Text>
                      </Row>
                    </div>
                  );
                })}
              </Col>
            ))}
          </Row>

          <Row className="grid_column_row">
            {weekData.map((dayData, dayIndex) => (
              <Col key={dayIndex} className="grid_column" span={3}>

                {dayData.afternoon.map((event, eventIndex) => {
                  // Tách chuỗi event thành giờ bắt đầu và kết thúc
                  const [startTimeStr, endTimeStr] = event.split('-').map(time => time.trim());

                  // Chuyển đổi thành đối tượng moment
                  const startTime = moment(startTimeStr, 'HH:mm');
                  const endTime = moment(endTimeStr, 'HH:mm');

                  // Tính toán khoảng thời gian giữa startTime và endTime
                  const duration = moment.duration(endTime.diff(startTime));
                  const totalMinutes = duration.asMinutes(); // tổng số phút
                  const totalHoursDecimal = totalMinutes / 60; // số giờ dưới dạng thập phân
                  const startDecimal = getTimeInDecimal(startTimeStr);

                  // Tính chênh lệch thời gian
                  const timeDifference = startDecimal - afternoonEarliest;
                  console.log(`Cheenh thời gian là: ${timeDifference.toFixed(2)}`);
                  console.log(`Khoảng thời gian là: ${totalHoursDecimal.toFixed(2)} giờ`);
                  return (
                    <div key={eventIndex} className="event">
                      <Row style={{ height: 10 + scaleValue * timeDifference * 20 }}>
                      </Row>
                      <Row className="grid_column_row" style={{ height: 50 + 20 * scaleValue * totalHoursDecimal }}>
                        <Text className="text">{startTimeStr}</Text>
                        <Text className="text">{endTimeStr}</Text>
                      </Row>
                    </div>
                  );
                })}
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

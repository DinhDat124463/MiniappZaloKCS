import React, { useState, useEffect } from "react";
import { Page, Grid, Center, Icon, Stack } from "zmp-ui";
import DetailMonth from "./detail_month";
import { Link } from "react-router-dom";
import { Day } from '../types/OOP';

import { Year } from '../types/OOP';
import { Project } from '../types/OOP';
import { Tuan } from '../types/menu';


const Calendar: React.FC = () => {
  const [currentWeek, setCurrentWeek] = useState<number>(1);
  const currentDate = new Date();

  useEffect(() => {
    const savedWeek = localStorage.getItem("lastUsedWeek");
    if (savedWeek) {
      setCurrentWeek(parseInt(savedWeek));
    }
  }, []);

  const decreaseWeek = () => {
    const newWeek = currentWeek === 1 ? 52 : currentWeek - 1;
    setCurrentWeek(newWeek);
    localStorage.setItem("lastUsedWeek", newWeek.toString());
  };

  const increaseWeek = () => {
    const newWeek = currentWeek === 52 ? 1 : currentWeek + 1;
    setCurrentWeek(newWeek);
    localStorage.setItem("lastUsedWeek", newWeek.toString());
  };

  const getCurrentWeekDates = () => {
    // Lấy năm hiện tại từ đối tượng currentDate
    const currentYear = currentDate.getFullYear();

    // Tính toán ngày bắt đầu của tuần hiện tại
    // Bằng cách sử dụng currentYear, currentWeek và ngày đầu tiên của năm
    const startDate = new Date(currentYear, 0, (currentWeek - 1) * 7 + 1);

    // Tính toán ngày kết thúc của tuần hiện tại
    // Bằng cách sử dụng currentYear, currentWeek và ngày cuối cùng của năm
    // (Tháng 0 là tháng 1 - tháng đầu tiên của năm)
    const endDate = new Date(currentYear, 0, currentWeek * 7);

    // Chuyển đổi ngày bắt đầu thành chuỗi có định dạng "DD/MM/YYYY"
    const startDateString = `${startDate.getDate()}/${startDate.getMonth() + 1}/${startDate.getFullYear()}`;

    // Chuyển đổi ngày kết thúc thành chuỗi có định dạng "DD/MM/YYYY"
    const endDateString = `${endDate.getDate()}/${endDate.getMonth() + 1}/${endDate.getFullYear()}`;
    new Tuan(startDateString);
    // Trả về chuỗi kết quả bao gồm ngày bắt đầu và kết thúc của tuần hiện tại
    return `${startDateString} - ${endDateString}`;
  };

  const handleAddButtonClick = () => {
    console.log("Tuần hiện tại:", currentWeek);
    console.log("Thời gian ngày tháng hiện tại:", getCurrentWeekDates());

    const day = new Day();

    const year = new Year();

    const project = new Project();
    project.years.push(year);


    console.log("Tuần hiện tại:", year);
    console.log("Thời gian ngày tháng hiện tại:", getCurrentWeekDates());
  };


  return (
    <Page>
      <Center gutters='1rem'>
        <Grid className='grid_Calendar' style={{ gridTemplateColumns: "50px 190px 40px", gridTemplateRows: "auto 5px" }}>
          <button onClick={decreaseWeek}>
            <Icon icon="zi-arrow-left" />
          </button>
          <div>Tuần {currentWeek}</div>
          <button onClick={increaseWeek}>
            <Icon icon="zi-arrow-right" />
          </button>
          <div></div>
          <div>{getCurrentWeekDates()}</div>
        </Grid>
      </Center>

      <Stack>
        <DetailMonth />
      </Stack>

      <div className="section-container">
        <Link to={`/schedule`}>
          <button onClick={handleAddButtonClick}>
            Đặt lịch hẹn
          </button>
        </Link>
      </div>
    </Page>
  );
}

export default Calendar;

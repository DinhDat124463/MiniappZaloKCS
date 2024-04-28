import React, { useState, useEffect } from "react";
import { Page, Grid, Center, Icon, Stack } from "zmp-ui";
import DetailMonth from "./detail_month";
import { Link } from "react-router-dom";

const Calendar: React.FC = () => {
  const [currentWeek, setCurrentWeek] = useState<number>(1);
  const currentDate = new Date();

  useEffect(() => {
    // Lấy giá trị tuần từ local storage nếu có
    const savedWeek = localStorage.getItem("lastUsedWeek");
    if (savedWeek) {
      setCurrentWeek(parseInt(savedWeek));
    }
  }, []);

  const decreaseWeek = () => {
    const newWeek = currentWeek === 1 ? 52 : currentWeek - 1;
    setCurrentWeek(newWeek);
    // Lưu giá trị tuần vào local storage
    localStorage.setItem("lastUsedWeek", newWeek.toString());
  };

  const increaseWeek = () => {
    const newWeek = currentWeek === 52 ? 1 : currentWeek + 1;
    setCurrentWeek(newWeek);
    // Lưu giá trị tuần vào local storage
    localStorage.setItem("lastUsedWeek", newWeek.toString());
  };

  const getCurrentWeekDates = () => {
    const currentYear = currentDate.getFullYear();
    const startDate = new Date(currentYear, 0, (currentWeek - 1) * 7 + 1);
    const endDate = new Date(currentYear, 0, currentWeek * 7);
    const startDateString = `${startDate.getDate()}/${startDate.getMonth() + 1}/${startDate.getFullYear()}`;
    const endDateString = `${endDate.getDate()}/${endDate.getMonth() + 1}/${endDate.getFullYear()}`;
    return `${startDateString} - ${endDateString}`;
  };

  const handleAddButtonClick = () => {
    // Thêm xử lý khi nút Thêm được click
  };

  return (
    <Page>
      <Center gutters='1rem'>
        <Grid className='grid_Calendar' style={{ gridTemplateColumns: "50px 190px 40px", gridTemplateRows: "auto 5px" }}>
          {/* Nút để giảm tuần */}
          <button onClick={decreaseWeek}>
            <Icon icon="zi-arrow-left" />
          </button>
          {/* Hiển thị tuần hiện tại */}
          <div>Tuần {currentWeek}</div>
          {/* Nút để tăng tuần */}
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
        <Link to="/Schedule">
          <button onClick={handleAddButtonClick}>
            Đặt lịch hẹn
          </button>
        </Link>
      </div>
    </Page>
  );
}

export default Calendar;

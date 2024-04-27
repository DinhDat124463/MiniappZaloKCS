import React, { useState } from "react";
import { Page, Grid, Center, Icon } from "zmp-ui";

const Calendar: React.FC = () => {
  const [currentWeek, setCurrentWeek] = useState<number>(1);

  const decreaseWeek = () => {
    setCurrentWeek(prevWeek => (prevWeek === 1 ? 52 : prevWeek - 1));
  };

  const increaseWeek = () => {
    setCurrentWeek(prevWeek => (prevWeek === 52 ? 1 : prevWeek + 1));
  };

  const getCurrentWeekDates = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const startDate = new Date(currentYear, 0, (currentWeek - 1) * 7 + 1);
    const endDate = new Date(currentYear, 0, currentWeek * 7);
    const startDateString = `${startDate.getDate()}/${startDate.getMonth() + 1}/${startDate.getFullYear()}`;
    const endDateString = `${endDate.getDate()}/${endDate.getMonth() + 1}/${endDate.getFullYear()}`;
    return `${startDateString} - ${endDateString}`;
  };

  const renderCalendar = () => {
    const daysOfWeek = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN'];

    return daysOfWeek.map(day => (
      <div key={day}>{day}</div>
    ));
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

        <div style={{ marginTop: '1rem', display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
          {renderCalendar()}
        </div>
      </Center>
    </Page>
  );
}

export default Calendar;

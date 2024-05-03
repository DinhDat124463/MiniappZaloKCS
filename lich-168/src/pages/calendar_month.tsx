import React, { useState, useEffect } from "react";
import { Page, Grid, Center, Icon, Stack } from "zmp-ui";
import DetailMonth from "./detail_month";
import { Link } from "react-router-dom";
import { Project } from '../types/OOP';
import { Tuan } from '../types/menu';

const Calendar: React.FC = () => {
  const [currentWeek, setCurrentWeek] = useState<number>(1);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const currentDate = new Date();

  useEffect(() => {
    const savedWeek = localStorage.getItem("lastUsedWeek");
    if (savedWeek) {
      setCurrentWeek(parseInt(savedWeek));
    }

    const savedProject = localStorage.getItem("project");
    if (savedProject) {
      const project = JSON.parse(savedProject);
      setCurrentProject(project);
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

    const tuan2 = new Tuan();
    tuan2.startDate.push(startDateString);


    console.log(`a ${tuan2.startDate}`);

    // Trả về chuỗi kết quả bao gồm ngày bắt đầu và kết thúc của tuần hiện tại
    return `${startDateString} - ${endDateString}`;
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
      {/* Assuming currentProject.years is an array of Year objects */}
      {currentProject && (
        <div className="project-info">
          <h2>Thông tin dự án:</h2>

          <div>
            {currentProject.years.map((year, index) => (
              <div key={index}>
                {/* <p>Năm: {year.days }</p> */}
                {/* Render other properties of 'year' */}
              </div>
            ))}
          </div>
          {/* Render other properties of 'currentProject' */}
        </div>
      )}

    </Page>
  );
}

export default Calendar;




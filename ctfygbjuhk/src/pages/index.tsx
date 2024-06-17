import React, { useState, useEffect } from "react";
import {
  List,
  Page,
  Icon,
  useNavigate,
  Calendar,
  DatePicker,
  Text,
  ZBox,
  Box,
} from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userState } from "../state";
import { Project } from "../state";
import { Tuan } from "../state";
import UserCard from "../components/user-card";
import { Col, Row, Button } from "antd";
import { project } from "../pages/add-Schedule";

import {
  endOfWeek,
  format,
  startOfWeek,
  eachDayOfInterval,
  eachWeekOfInterval,
  subDays,
  addDays,
  getWeekYear,
  getWeekOfMonth,
  getWeek,
} from "date-fns";

const weekdays = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
const tuan = new Tuan();
const HomePage: React.FunctionComponent = () => {
  const [data, setData] = useState<string[][]>([]);
  const currentDate = new Date();
  const navigate = useNavigate();
  const w = getWeek(currentDate);

  const [currentWeek, setCurrentWeek] = useState<number>(w);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const firstDayOfWeek = startOfWeek(currentDate);
  const lastDayOfWeek = endOfWeek(currentDate);

  // const dayInWeek = eachDayOfInterval({
  //   start: firstDayOfWeek,
  //   end: lastDayOfWeek,
  // });
  useEffect(() => {
    // const savedWeek = localStorage.getItem("lastUsedWeek");
    // if (savedWeek) {
    //   setCurrentWeek(parseInt(savedWeek));
    // }

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
    const startDateString = `${startDate.getDate()}/${
      startDate.getMonth() + 1
    }/${startDate.getFullYear()}`;

    // Chuyển đổi ngày kết thúc thành chuỗi có định dạng "DD/MM/YYYY"
    const endDateString = `${endDate.getDate()}/${
      endDate.getMonth() + 1
    }/${endDate.getFullYear()}`;

    tuan.startDate = []; // Xóa hết các dữ liệu trước đó

    // Thêm dữ liệu mới vào mảng startDate
    tuan.startDate.push(startDateString);

    // console.log(`${tuan.startDate}`);

    // Trả về chuỗi kết quả bao gồm ngày bắt đầu và kết thúc của tuần hiện tại
    return `${startDateString} - ${endDateString}`;
  };
  const getDayInWeek = () => {
    const currentYear = currentDate.getFullYear();
    const startDate = new Date(currentYear, 0, (currentWeek - 1) * 7 + 1);
    const endDate = new Date(currentYear, 0, currentWeek * 7);
    const dayInWeek = eachDayOfInterval({
      start: startDate,
      end: endDate,
    });
    return { dayInWeek };
  };
  const diw = getDayInWeek();
  return (
    <Page className="page">
      <div className="section-container">
        <Box>
          <button
            className="button"
            style={{ float: "left" }}
            onClick={decreaseWeek}
          >
            <Icon icon="zi-chevron-left" />
          </button>
          <button
            className="button"
            style={{ float: "right" }}
            onClick={increaseWeek}
          >
            <Icon icon="zi-chevron-right" />
          </button>
          {/* <div className="font-bold text-center">Tuần {currentWeek}</div> */}
          <div className="font-bold text-center texttd">- Lịch 168 -</div>
          <div className="font-bold text-center">{getCurrentWeekDates()}</div>

          <br></br>
          <div className="grid grid-cols-7 gap-2 ">
            {weekdays.map((day) => {
              if (day == "CN")
                return (
                  <div key={day} className="font-bold text-center texttd">
                    {day}
                  </div>
                );
              else
                return (
                  <div key={day} className="font-bold text-center">
                    {day}
                  </div>
                );
            })}
          </div>
          <div className="grid grid-cols-7 gap-2 ">
            {diw.dayInWeek.map((day, index) => {
              if (diw.dayInWeek.lastIndexOf(day) == 6)
                return (
                  <div key={index} className="text-center texttd">
                    <button
                      onClick={() => {
                        navigate("/Schedule");
                      }}
                    >
                      {format(day, "d")}
                    </button>
                  </div>
                );
              else if (format(day, "dd,MM") == format(currentDate, "dd,MM"))
                return (
                  <div key={index} className="text-center today">
                    <button
                      onClick={() => {
                        navigate("/Schedule");
                      }}
                    >
                      {format(day, "d")}
                    </button>
                  </div>
                );
              else
                return (
                  <div key={index} className="text-center">
                    <button
                      onClick={() => {
                        navigate("/Schedule");
                      }}
                    >
                      {format(day, "d")}
                    </button>
                  </div>
                );
            })}
          </div>
        </Box>
        <br></br>
        <Box>
          <div className="grid grid-cols-7 ">
            <div className=" grid-item ">
              <Text>{data[1]}</Text>
            </div>
            <div className="grid-item">
              <Text>{data[2]}</Text>
            </div>
            <div className=" grid-item">
              <Text>{data[3]}</Text>
            </div>
            <div className=" grid-item">
              <Text>{data[4]}</Text>
            </div>
            <div className=" grid-item">
              <Text>{data[5]}</Text>
            </div>
            <div className=" grid-item">
              <Text>{data[6]}</Text>
            </div>
            <div className=" grid-item">
              <Text>{data[7]}</Text>
            </div>
          </div>
        </Box>
        <br></br>
        <Box>
          <div className="grid grid-cols-7">
            <div className=" grid-item ">
              <Text>{data[1]}</Text>
            </div>
            <div className="grid-item">
              <Text>{data[2]}</Text>
            </div>
            <div className=" grid-item">
              <Text>{data[3]}</Text>
            </div>
            <div className=" grid-item">
              <Text>{data[4]}</Text>
            </div>
            <div className=" grid-item">
              <Text>{data[5]}</Text>
            </div>
            <div className=" grid-item">
              <Text>{data[6]}</Text>
            </div>
            <div className=" grid-item">
              <Text>{data[7]}</Text>
            </div>
          </div>
        </Box>
      </div>
    </Page>
  );
};
export { tuan };
export default HomePage;

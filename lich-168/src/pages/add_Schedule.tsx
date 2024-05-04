import React, { useState, useEffect } from "react";
import { Page, Box, Button, Text, Input, useSnackbar } from "zmp-ui";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Project } from '../types/OOP';
import { Year } from '../types/OOP';
import { Day } from '../types/OOP';
import { MorningData } from '../types/OOP';
import { AfternoonData } from '../types/OOP';
import { tuan2 } from '../pages/calendar_month';

const project = new Project();


const Schedule: React.FC = () => {
  const { openSnackbar } = useSnackbar();
  const [currentProject, setCurrentProject] = useState<Project | null>(null); // Khai báo state để lưu dữ liệu từ Project
  const { week } = useParams<{ week: string }>();
  const [Tieude, setInputValue] = useState("");
  const [Noidungchitiet, setInputValue2] = useState("");

  useEffect(() => {
    const project = new Project();
    setCurrentProject(project);
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  const ButtonClick = () => {

    if (Tieude !== "" && Noidungchitiet !== "") {
      const morning = new MorningData("morning time", Tieude, Noidungchitiet);
      const afternoon = new AfternoonData("afternoon time", "afternoon content", "afternoon detail content");

      const day = new Day();
      day.morningData.push(morning);
      day.afternoonData.push(afternoon);

      const year = new Year();
      year.days.push(day);

      project.years.push(year);
      console.log(project);

      openSnackbar({
        text: "Thêm thành công",
        type: "success"
      });

    } else {

      openSnackbar({
        text: "Các thông tin không được cung cấp đầy đủ.",
        position: "top",
      });
    }
  };

  return (
    <Page>
      <div>Thời gian {(tuan2.startDate)}</div>

      <Text name="txt_tieude">Tiêu đề</Text>
      <Input type="text" value={Tieude} onChange={handleInputChange} />
      <Text>Nội dung chi tiết</Text>
      <Input.TextArea value={Noidungchitiet} onChange={handleInputChange2} showCount />

      {currentProject && (
        <Button className="schedule-button" onClick={ButtonClick}>
          Đặt lịch
        </Button>
      )}

    </Page>
  );
};
export { project };
export default Schedule;

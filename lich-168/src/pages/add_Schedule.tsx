import React, { useState, useEffect } from "react";
import { Page, Text, Input, Button, useSnackbar } from "zmp-ui";
import { useParams } from "react-router-dom";
import { Month, Project } from '../types/OOP';
import { Year } from '../types/OOP';
import { Day } from '../types/OOP';
import { MorningData } from '../types/OOP';
import { AfternoonData } from '../types/OOP';
import { tuan2 } from '../pages/calendar_month'; // Import tuan2 từ 'calendar_month'

const project = new Project();

const Schedule: React.FC = () => {
  const { openSnackbar } = useSnackbar();
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const { week } = useParams<{ week: string }>();
  const [Tieude, setTieude] = useState("");
  const [Noidungchitiet, setNoidungchitiet] = useState("");

  useEffect(() => {
    const project = new Project();
    setCurrentProject(project);
  }, []);

  // Hàm tách chuỗi ngày tháng năm
  const tachChuoiNgayThangNam = (dateString: string) => {
    const parts = dateString.split('/');
    const ngay = parts[0];
    const thang = parts[1];
    const nam = parts[2];
    return { ngay, thang, nam };
  };


  const ngayThangNam = tachChuoiNgayThangNam(tuan2.startDate[0]);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTieude(event.target.value);
  };

  const handleInputChange2 = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoidungchitiet(event.target.value);
  };

  const ButtonClick = () => {
    if (Tieude !== "" && Noidungchitiet !== "") {
      const morning = new MorningData("morning time", Tieude, Noidungchitiet);
      const afternoon = new AfternoonData("afternoon time", "afternoon content", "afternoon detail content");

      // Tách chuỗi ngày tháng năm
      const { ngay, thang, nam } = tachChuoiNgayThangNam(tuan2.startDate);

      // Tạo một Day mới và thêm dữ liệu buổi sáng và buổi chiều vào
      const day = new Day();
      day.morningData.push(morning);
      day.afternoonData.push(afternoon);

      // Tạo một Month mới và thêm Day vào
      const month = new Month();
      month.days.push(day);

      // Tạo một Year mới và thêm Month vào
      const year = new Year();
      year.months.push(month);

      // Kiểm tra xem `project.years` đã có phần tử nào chưa
      if (!project.years.length) {
        // Nếu chưa có, thêm `year` vào `project.years`
        project.years.push(year);
      } else {
        // Nếu đã có, tìm `year` có cùng `nam` và thêm `month` vào đó
        let existingYear = project.years.find(y => y.nam === nam);
        if (!existingYear) {
          existingYear = new Year();
          existingYear.nam = nam;
          project.years.push(existingYear);
        }
        existingYear.months.push(month);
      }

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
      <div>Thời gian {tuan2.startDate}</div>

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

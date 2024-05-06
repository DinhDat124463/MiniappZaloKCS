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

  const tachChuoiNgayThangNam = (dateString: string) => {
    const parts = dateString.split('/');
    // Parse ngày, tháng, năm từ chuỗi và chuyển đổi sang kiểu số
    const ngay = parseInt(parts[0], 10);
    const thang = parseInt(parts[1], 10);
    const nam = parseInt(parts[2], 10);
    // Trả về kết quả
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
      const day = new Day(ngayThangNam.ngay);
      day.morningData.push(morning);
      day.afternoonData.push(afternoon);
      const month = new Month(ngayThangNam.thang);
      month.days.push(day);
      let yearExists = false;
      for (const existingYear of project.years) {
        if (existingYear.year === ngayThangNam.nam) {
          // Nếu năm đã tồn tại, kiểm tra xem có tháng nào trùng với tháng mới hay không
          let monthExists = false;
          for (const existingMonth of existingYear.months) {
            if (existingMonth.month === ngayThangNam.thang) {
              // Nếu tháng đã tồn tại, thêm dữ liệu mới vào tháng đó
              //existingMonth.month.push(ngayThangNam.ngay);
              monthExists = true;
              break;
            }
          }
          // Nếu tháng mới không trùng với bất kỳ tháng nào trong năm, tạo tháng mới và thêm dữ liệu vào đó
          if (!monthExists) {
            const month = new Month(ngayThangNam.thang);
            existingYear.months.push(month);
          }
          yearExists = true;
          break;
        }
      }

      // Nếu năm mới không trùng với bất kỳ năm nào trong project.years, tạo năm mới và thêm tháng vào đó
      if (!yearExists) {
        const year = new Year(ngayThangNam.nam);
        const month = new Month(ngayThangNam.thang);
        year.months.push(month);
        project.years.push(year);
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

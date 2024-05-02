import React, { useState, useEffect } from "react";
import { Page, useTheme, Box, Button, Text, Input, Picker } from "zmp-ui";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Project } from '../types/OOP';
import { Year } from '../types/OOP';
import { Day } from '../types/OOP';
import { MorningData } from '../types/OOP';
import { AfternoonData } from '../types/OOP';

const Schedule: React.FC = () => {
  const [sheetVisible, setSheetVisible] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null); // Khai báo state để lưu dữ liệu từ Project
  const { week } = useParams<{ week: string }>(); // Explicitly specify the type as string
  const [txtTieudeContent, setTxtTieudeContent] = useState("");
  useEffect(() => {
    const project = new Project();
    setCurrentProject(project);
  }, []);

  interface OptionData {
    value: number;
    displayName: string;
  }
  const genTestData = (name: string, number: number, prefix = "Option"): OptionData[] => {
    const data: OptionData[] = [];
    for (let i = 0; i < number; i++) {
      data.push({
        value: i + 1,
        displayName: `${prefix}${i + 1}`
      });
    }
    return data;
  };

  const ButtonClick = () => {

    const textContent = document.getElementsByName("txt_tieude");

    const morning = new MorningData("morning time", "morning content", "morning detail content");
    const afternoon = new AfternoonData("afternoon time", "afternoon content", "afternoon detail content");

    const day = new Day();
    day.morningData.push(morning);
    day.afternoonData.push(afternoon);

    const year = new Year();

    const project = new Project();


    project.years.push(year);
    console.log("Tuần hiện tại:", morning);
    console.log("Thời gian ngày tháng hiện tại:", textContent);

  };
  return (
    <Page>
      {/* <div>Ngày {week}</div>
      <Box mt={6}>
        <Picker
          label='Từ'
          data={[
            {
              options: genTestData("key1", 24, ""),
              name: "otp1"
            },
            {
              options: genTestData("key2", 60, ""),
              name: "otp2"
            },
            {
              options: genTestData("key3", 60, ""),
              name: "otp3"
            }
          ]}
        />

      </Box> */}
      <div>Thời gian {week}</div>
      <Text name="txt_tieude">Tiêu đề</Text>
      <Input type="text" />

      <Text>Nội dung chi tiết</Text>
      <Input.TextArea showCount />

      {currentProject && (
        <Link to={`/`}>
          <Button
            className="schedule-button"
            onClick={ButtonClick}
          >
            Đặt lịch
          </Button>
        </Link>
      )}

      <Button
        className="cancel-button"
        variant="secondary"
        onClick={() => setSheetVisible(false)}
      >
        Hủy
      </Button>
    </Page>
  );
};

export default Schedule;

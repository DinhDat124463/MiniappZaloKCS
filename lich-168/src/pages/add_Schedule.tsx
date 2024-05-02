import React, { useState, useEffect } from "react";
import { Page, useTheme, Box, Button, Text, Input, Picker } from "zmp-ui";
import { useParams } from "react-router-dom";
import { Project } from '../types/OOP';

const Schedule: React.FC = () => {
  const [sheetVisible, setSheetVisible] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null); // Khai báo state để lưu dữ liệu từ Project
  const { week } = useParams<{ week: string }>(); // Explicitly specify the type as string

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


  return (
    <Page>
      <div>Ngày {week}</div>
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

      </Box>
      <div>Thời gian {week}</div>
      <Text name="txt_tieude">Tiêu đề</Text>
      <Input type="text" />

      <Text>Nội dung chi tiết</Text>
      <Input.TextArea showCount />

      {currentProject && (
        <Button
          className="schedule-button"
          onClick={() => setSheetVisible(false)}
        >
          Đặt lịch
        </Button>
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

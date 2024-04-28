import React, { useState } from "react";
import { Page, useTheme, Box, Button, Text, Input } from "zmp-ui";
type Option = {
  value: number;
  displayName: string;
};

const Schedule: React.FC = () => {
  const [sheetVisible, setSheetVisible] = useState(false);

  return (
    <Page>

      <Text>Tiêu đề</Text>
      <Input type="text" />

      <Text>Nội dung chi tiết</Text>
      <Input.TextArea showCount />

      <Button
        className="schedule-button"
        onClick={() => setSheetVisible(false)}
      >
        Đặt lịch
      </Button>
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

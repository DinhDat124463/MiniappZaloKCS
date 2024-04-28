import React, { useState } from "react";
import { useTheme, Box, Text } from "zmp-ui";

const Detail: React.FC = () => {
  const [theme] = useTheme();
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [selectedColumn, setSelectedColumn] = useState<number | null>(null);

  const daysOfWeek = ["Thời gian", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"];

  const handleCellClick = (row: number, column: number) => {
    setSelectedRow(row);
    setSelectedColumn(column);
  };

  const getDayOfWeek = (column: number) => {
    // Trả ra thứ mà tương ứng với cột được chọn
    if (column >= 2 && column <= 8) {
      return daysOfWeek[column - 1];
    } else {
      return "Không hợp lệ"; // Hoặc có thể trả ra một giá trị mặc định khác nếu cột không hợp lệ
    }
  };

  return (
    <div>
      {/* Hàng 1 */}
      <div className="grid_detail">
        {daysOfWeek.map((day, index) => (
          <Box
            key={index}
            style={{ flex: 1, textAlign: "center", cursor: "pointer", ...(index === 0 && { writingMode: "horizontal-tb" }) }}
            onClick={() => handleCellClick(1, index + 1)}
          >
            <Text>{day}</Text>
          </Box>
        ))}
      </div>
      {/* Hàng 2 */}
      <div className="grid_detail">
        {/* Chỉ hiển thị dữ liệu trong cột đầu tiên */}
        <Box
          style={{ flex: 1, textAlign: "center", cursor: "pointer" }}
          onClick={() => handleCellClick(2, 1)} // Lưu ý rằng chỉ số hàng (row) là 2 vì chúng ta đang thêm vào hàng thứ hai
        >
          <Text>{daysOfWeek[0]}</Text> {/* Chỉ lấy dữ liệu từ cột đầu tiên của mảng daysOfWeek */}
        </Box>
      </div>

      {/* Hàng 3 */}
      <div className="grid_detail">
        {daysOfWeek.map((day, index) => (
          <Box
            key={index}
            style={{ flex: 1, textAlign: "center", cursor: "pointer" }}
            onClick={() => handleCellClick(3, index + 1)}
          >
            <Text>{day}</Text>
          </Box>
        ))}
      </div>
      {/* Hiển thị thông tin hàng và cột được chọn */}
      {
        selectedRow !== null && selectedColumn !== null && (
          <div>
            <Text>{getDayOfWeek(selectedColumn)}</Text>
          </div>
        )
      }
    </div >
  );
};

export default Detail;

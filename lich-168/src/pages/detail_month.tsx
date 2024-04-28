import React, { useState } from "react";
import { useTheme, Box, Text } from "zmp-ui";

const Detail: React.FC = () => {
  const [theme] = useTheme();
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [selectedColumn, setSelectedColumn] = useState<number | null>(null);
  const [data, setData] = useState<string[]>([]);
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

  const handleAddData = () => {
    const newData = "Dữ liệu mới"; // Thay "Dữ liệu mới" bằng dữ liệu bạn muốn thêm vào
    setData([...data, newData]);
  };

  return (
    <div>
      {/* Button để thêm dữ liệu */}
      <button onClick={handleAddData}>Thêm dữ liệu</button>

      {/* Lưới */}
      <div>
        {/* Hiển thị dữ liệu */}
        {data.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>

      {/* Hiển thị thông tin hàng và cột được chọn */}
      {selectedRow !== null && selectedColumn !== null && (
        <div>
          <Text>{getDayOfWeek(selectedColumn)}</Text>
        </div>
      )}
    </div>
  );
};

export default Detail;

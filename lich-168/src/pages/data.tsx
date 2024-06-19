// Định nghĩa interface DaySchedule để mô tả cấu trúc dữ liệu của mỗi ngày trong tuần
export interface DaySchedule {
  morning: string[];    // Mảng các thời gian sáng
  afternoon: string[];  // Mảng các thời gian chiều
}

// Hàm getFakeData trả về một mảng các đối tượng DaySchedule, mô phỏng lịch làm việc trong tuần
export const getFakeData = (): DaySchedule[] => {
  return [
    { morning: ["09:00-11:00"], afternoon: ["13:00-15:00"] }, // Thứ 2
    { morning: ["09:00-11:30"], afternoon: ["15:00-15:30"] }, // Thứ 3
    { morning: ["07:25-11:10"], afternoon: ["16:00-16:00"] }, // Thứ 4
    { morning: ["05:30-11:10"], afternoon: ["14:00-16:00"] }, // Thứ 5
    { morning: ["10:30-12:10"], afternoon: ["14:00-16:00"] }, // Thứ 6
    { morning: ["10:50-11:10"], afternoon: ["14:00-16:00"] }, // Thứ 7
    { morning: ["10:45-11:10"], afternoon: ["14:00-16:00"] }  // Chủ nhật
  ];
};

// Hàm getTimeInDecimal chuyển đổi thời gian từ chuỗi HH:MM sang số thập phân đại diện cho số giờ
const getTimeInDecimal = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number); // Tách giờ và phút, chuyển đổi sang số
  return hours + minutes / 60; // Trả về số thập phân đại diện cho thời gian từ 00:00
};

const getEarliestAndLatestTimes = (weekData: DaySchedule[]): { earliest: number, latest: number } => {
  let earliestTime = 23.99; // Khởi tạo thời gian sớm nhất với 23 giờ 59 phút trong dạng số thập phân
  let latestTime = 0.0;     // Khởi tạo thời gian muộn nhất với 0 giờ 00 phút trong dạng số thập phân

  // Duyệt qua từng ngày trong tuần
  weekData.forEach(day => {
    // Kết hợp mảng thời gian sáng và chiều của mỗi ngày lại với nhau
    day.morning.concat(day.afternoon).forEach(timeRange => {
      // Tách thời gian bắt đầu và kết thúc từ chuỗi HH:MM-HH:MM
      const [startTime, endTime] = timeRange.split('-');
      // Chuyển đổi thời gian bắt đầu và kết thúc sang số thập phân
      const startDecimal = getTimeInDecimal(startTime);
      const endDecimal = getTimeInDecimal(endTime);
      // So sánh và cập nhật thời gian sớm nhất và muộn nhất nếu cần thiết
      if (startDecimal < earliestTime) {
        earliestTime = startDecimal;
      }
      if (endDecimal > latestTime) {
        latestTime = endDecimal;
      }
    });
  });

  // Trả về đối tượng chứa thời gian sớm nhất và muộn nhất dưới dạng số thập phân
  return { earliest: earliestTime, latest: latestTime };
};

// Lấy dữ liệu giả lập từ hàm getFakeData
const weekData = getFakeData();
// Gọi hàm getEarliestAndLatestTimes để lấy thời gian sớm nhất và muộn nhất
const { earliest, latest } = getEarliestAndLatestTimes(weekData);

// In ra màn hình thời gian sớm nhất và muộn nhất
console.log(`Thời gian sớm nhất: ${earliest.toFixed(2)}`);
console.log(`Thời gian muộn nhất: ${latest.toFixed(2)}`);

// Interface để mô tả cấu trúc dữ liệu của đối tượng Scale
export interface Scale {
  scale: number; // Giá trị tỉ lệ
}
// Hàm getScale tính toán và trả về tỉ lệ dựa trên khoảng thời gian từ thời gian sớm nhất đến thời gian muộn nhất
export const getScale = (): Scale => {
  const scaleValue = (latest - earliest) / 24; // Tính tỉ lệ như là phần trăm của 24 giờ
  return { scale: scaleValue };
};

// Hàm getEarliestTime để lấy thời gian sớm nhất của buổi sáng và buổi chiều từ dữ liệu lịch làm việc trong tuần
export const getEarliestTime = (): { morningEarliest: number, afternoonEarliest: number } => {
  const weekData = getFakeData(); // Lấy dữ liệu giả lập từ hàm getFakeData
  let morningEarliest = Infinity; // Khởi tạo với giá trị vô cực để tìm giá trị nhỏ nhất
  let afternoonEarliest = Infinity; // Khởi tạo với giá trị vô cực để tìm giá trị nhỏ nhất

  // Duyệt qua từng ngày trong tuần
  weekData.forEach(day => {
    // Duyệt qua từng khoảng thời gian sáng của ngày hiện tại
    day.morning.forEach(timeRange => {
      const startTime = timeRange.split('-')[0];
      const startDecimal = getTimeInDecimal(startTime);
      if (startDecimal < morningEarliest) {
        morningEarliest = startDecimal;
      }
    });

    // Duyệt qua từng khoảng thời gian chiều của ngày hiện tại
    day.afternoon.forEach(timeRange => {
      const startTime = timeRange.split('-')[0];
      const startDecimal = getTimeInDecimal(startTime);
      if (startDecimal < afternoonEarliest) {
        afternoonEarliest = startDecimal;
      }
    });
  });

  // Trả về đối tượng chứa thời gian sớm nhất của buổi sáng và buổi chiều
  return { morningEarliest, afternoonEarliest };
};
// Sử dụng hàm getEarliestTime để lấy thời gian sớm nhất của buổi sáng và buổi chiều
const { morningEarliest, afternoonEarliest } = getEarliestTime();

console.log(`Thời gian sớm nhất của buổi sáng: ${morningEarliest.toFixed(2)}`);
console.log(`Thời gian sớm nhất của buổi chiều: ${afternoonEarliest.toFixed(2)}`);
console.log(getScale());
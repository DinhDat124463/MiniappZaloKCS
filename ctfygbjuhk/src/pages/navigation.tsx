import React, { useState } from "react";
import { BottomNavigation, Icon, Page, useNavigate } from "zmp-ui";

const BottomNavigationPage = (props) => {
  const [activeTab, setActiveTab] = useState("chat");
  const { title } = props;
  const navigate = useNavigate();
  // Hàm xử lý sự kiện khi nhấp vào mỗi phần tử
  const handleTabClick = (key) => {
    setActiveTab(key); // Cập nhật tab được chọn
  };

  return (
    <Page className="page">
      <BottomNavigation
        fixed
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key)}
      >
        <BottomNavigation.Item
          key="chat"
          label="Trang chủ"
          icon={<Icon icon="zi-home" />}
          activeIcon={<Icon icon="zi-home" />}
          onClick={() => navigate("/")} // Gọi hàm xử lý sự kiện khi nhấp vào phần tử "Trang chủ"
        />
        <BottomNavigation.Item
          label="Đặt lịch"
          key="contact"
          icon={<Icon icon="zi-call" />}
          activeIcon={<Icon icon="zi-call-solid" />}
          onClick={() => navigate("/Schedule")}
          // Gọi hàm xử lý sự kiện khi nhấp vào phần tử "Danh bạ"
        />
        <BottomNavigation.Item
          key="timeline"
          label="Nhật ký"
          icon={<Icon icon="zi-clock-1" />}
          activeIcon={<Icon icon="zi-clock-1-solid" />}
          onClick={() => handleTabClick("timeline")} // Gọi hàm xử lý sự kiện khi nhấp vào phần tử "Nhật ký"
        />
        <BottomNavigation.Item
          key="user"
          label="Cá nhân"
          icon={<Icon icon="zi-user" />}
          activeIcon={<Icon icon="zi-user-solid" />}
          onClick={() => handleTabClick("user")} // Gọi hàm xử lý sự kiện khi nhấp vào phần tử "Cá nhân"
        />
      </BottomNavigation>
    </Page>
  );
};

export default BottomNavigationPage;

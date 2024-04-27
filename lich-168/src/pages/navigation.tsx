import React, { useState } from "react";
import { BottomNavigation, Icon, Page } from "zmp-ui";

const BottomNavigationPage = (props) => {
  const [activeTab, setActiveTab] = useState("chat");
  const { title } = props;
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
          icon={<Icon icon="zi-chat" />}
          activeIcon={<Icon icon="zi-chat-solid" />}
        />
        <BottomNavigation.Item
          label="Danh bạ"
          key="contact"
          icon={<Icon icon="zi-call" />}
          activeIcon={<Icon icon="zi-call-solid" />}
        />
        <BottomNavigation.Item
          key="timeline"
          label="Nhật ký"
          icon={<Icon icon="zi-clock-1" />}
          activeIcon={<Icon icon="zi-clock-1-solid" />}
        />
        <BottomNavigation.Item
          key="me"
          label="Cá nhân"
          icon={<Icon icon="zi-user" />}
          activeIcon={<Icon icon="zi-user-solid" />}
        />
      </BottomNavigation>
    </Page>
  );
};

export default BottomNavigationPage;

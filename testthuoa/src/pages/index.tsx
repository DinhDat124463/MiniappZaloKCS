import React from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userState } from "../state";

import UserCard from "../components/user-card";

const HomePage: React.FunctionComponent = () => {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  return (
    <Page className="page">
      <div className="section-container">
        <UserCard user={user.userInfo} />
      </div>
      <div className="section-container">
        <List>
          <List.Item
            onClick={() => navigate("/follow")}
            suffix={<Icon icon="zi-arrow-right" />}
          >
            <div>FollowOA</div>
          </List.Item>
          <List.Item
            onClick={() => navigate("/user")}
            suffix={<Icon icon="zi-arrow-right" />}
          >
            <div>User</div>
          </List.Item>
          <List.Item
            onClick={() => navigate("/CapQuyen")}
            suffix={<Icon icon="zi-arrow-right" />}
          >
            <div>Cấp quyền</div>
          </List.Item>
          <List.Item
            onClick={() => navigate("/PhoneNumberComponent")}
            suffix={<Icon icon="zi-arrow-right" />}
          >
            <div>SDT</div>
          </List.Item>

          <List.Item
            onClick={() => navigate("/Option_user")}
            suffix={<Icon icon="zi-arrow-right" />}
          >
            <div>Option</div>
          </List.Item>

        </List>
      </div>
    </Page>
  );
};

export default HomePage;
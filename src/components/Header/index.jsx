import { UserOutlined } from "@ant-design/icons";
import { Layout, Typography } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";

const { Header } = Layout;

const { Title } = Typography;

const HeaderMain = () => {
  return (
    <Header style={{ padding: 10 }}>
      <Avatar
        size={"large"}
        style={{ float: "right" }}
        icon={<UserOutlined />}
      />
      <Title style={{ color: "white" }} level={2}>
        Admin
      </Title>
    </Header>
  );
};

export default HeaderMain;

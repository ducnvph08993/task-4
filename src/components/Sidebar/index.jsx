import {
  DashboardOutlined,
  TeamOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React from "react";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const SiderBar = () => {
  return (
    <Sider>
      <Menu defaultSelectedKeys={["Dashboard"]} mode="inline">
        <Menu.Item key="Dashboard">
          <Link to="/">
            <DashboardOutlined />
            Dashboard
          </Link>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span>
              <TeamOutlined />
              <span>Employees</span>
            </span>
          }
        >
          <Menu.ItemGroup key="interact" title="Interact">
            <Menu.Item key="add">
              <UserAddOutlined />
              <Link to="/add">Add</Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SiderBar;

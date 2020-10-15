import React from "react";
import { Breadcrumb, Space, Table, Tag } from "antd";
import { useSelector } from "react-redux";

const Employees = () => {

  const employees = useSelector(state => state.employees.employees);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render:text => <a href="/#">{text}</a>
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Action',
      key: 'action',
      render: (text,record) => (
        <Space size="middle">
          <a href="/#">Invite {record.name}</a>
          <a href="/#">Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Table</Breadcrumb.Item>
      </Breadcrumb>
      <Table columns={columns} dataSource={employees} />
    </div>
  );
};

export default Employees;
  // component={ () =>  <Employees employees={employees}/> }
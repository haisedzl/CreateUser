import React, { useEffect, useState } from "react";
import { Space, Table } from "antd";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getDataUser, getDataUsers } from "../../Redux/usersSlice";
import DeleteUser from "../DeteleUser";
import { selectorDataUsers } from "../../Redux/selectors";

const columns = [
  {
    title: "FirstName",
    dataIndex: "firstName",
    key: "firstName",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "LastName",
    dataIndex: "lastName",
    key: "lastName",
    render: (text) => <a>{text}</a>,
  },
  {
    // sai key value
    title: "DateOfBirth",
    dataIndex: "dateOfBirth",
    key: "dateOfBirth",
  },
  {
    // sai key value
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    // sai key value
    title: "IsGraduate",
    dataIndex: "isGraduate",
    key: "isGraduate",
  },
  {
    // sai key value
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    // sai key value
    title: "School",
    key: "school",
    dataIndex: "school",
  },
  {
    // sai key value
    title: "Phone",
    key: "phone",
    dataIndex: "phone",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>
          <DeleteUser id={record.id} />
        </a>
        <a>
          <Link to={`/edit/${record.id}`}>Cập nhập thông tin</Link>
        </a>
      </Space>
    ),
  },
];
const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectorDataUsers);
  useEffect(() => {
    try {
      dispatch(getDataUsers());
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <Table columns={columns} dataSource={data} key={(data) => data.id} />;
};
export default App;

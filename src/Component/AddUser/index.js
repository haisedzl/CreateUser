import React from "react";
import { Button, Form, Input, Radio } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { usersService } from "../../service";

const schema = yup
  .object({
    firstName: yup.string().required("First Name is a required field"),
    lastName: yup.string().required("Last Name is a required field"),
    address: yup.string().required("Address is a required field"),
    phone: yup.number().required("Phone is a required field"),
    dateOfBirth: yup.date().required("Date of birth is a required field"),
    gender: yup.string().required("Gender is a required field"),
    isGraduate: yup.boolean().required("IsGraduate is a required field"),
    school: yup.string().required("School is a required field"),
  })
  .required();

const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 12,
  },
};

const validateMessages = {
  required: "Xin vui lòng nhập ${label}!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const AddUser = () => {
  const navigate = useNavigate();

  const {} = useForm({
    resolver: yupResolver(schema),
  });

  const onFinish = async (values) => {
    await usersService.getPost(values);
    navigate("/");
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name="firstName"
        label="First Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="lastName"
        label="Last name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="gender"
        name="gender"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Radio.Group>
          <Radio value="Nam"> Nam </Radio>
          <Radio value="Nữ"> Nữ </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="address"
        label="Address"
        rules={[
          {
            required: true,
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="isGraduate"
        name="isGraduate"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Radio.Group>
          <Radio value="chưa tốt nghiệp"> chưa tốt nghiệp </Radio>
          <Radio value="đã học xong"> đã tốt nghiệp </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="dateOfBirth"
        label="Ngày Sinh"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="school"
        label="desc"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default AddUser;

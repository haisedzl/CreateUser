import React from "react";
import { Button, Form, Input, InputNumber, Radio } from "antd";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import { usersService } from "../../service";
import { selectorDataUser } from "../../Redux/selectors";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// const schema = yup
//   .object({
//     firstName: yup.string().required("First Name is a required field"),
//       lastName: yup.string().required("Last Name is a required field"),
//       address: yup.string().required("Address is a required field"),
//       phone: yup.number().required("Phone is a required field"),
//       dateOfBirth: yup.date().required("Date of birth is a required field"),
//       gender: yup.string().required("Gender is a required field"),
//       isGraduate: yup.boolean(),
//       school: yup.string().required("School is a required field"),
//   })
//   .required();

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 12,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const EditUser = () => {
  const navigate = useNavigate();

  const user = useSelector(selectorDataUser);
  const { id } = useParams();
  const defaultValues = {
    firstName: user.firstName,
    lastName:user.lastName,
    address: user.address,
    phone: user.phone,
    school: user.school,
    isGraduate:user.isGraduate,
    gender:user.gender,
    dateOfBirth:user.dateOfBirth
  };
  const { reset } = useForm({
    defaultValues,
  });

  const onFinish = async (values) => {
    await usersService.putUser(id, values);
    navigate("/");
    reset({});
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item name="firstName" label="First Name">
        <Input />
      </Form.Item>
      <Form.Item name="lastName" label="Last name">
        <Input />
      </Form.Item>
      <Form.Item label="gender" name="gender">
        <Radio.Group>
          <Radio value="nam"> nam </Radio>
          <Radio value="nu"> nữ </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="address" label="Address">
        <Input />
      </Form.Item>
      <Form.Item name="phone" label="Phone Number">
        <Input />
      </Form.Item>
      <Form.Item label="isGraduate" name="isGraduate">
        <Radio.Group>
          <Radio value="chưa tốt nghiệp"> chưa tốt nghiệp </Radio>
          <Radio value="đã học xong"> đã tốt nghiệp </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="dateOfBirth" label="Ngày Sinh">
        <Input />
      </Form.Item>
      <Form.Item
        name="school"
        label="desc"
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
export default EditUser;

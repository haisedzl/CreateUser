import { instance } from "./axiosClient";
import { v4 as uuidv4 } from "uuid";

export const getUsers = async () => {
  const res = await instance.get("users");
  return res.data;
};

export const getUser = async (id) => {
  const response = await instance.get(`users/${id}`);
  const data = response.data;
  return data;
};

export const getPost = async (data) => {
  const post = await instance.post("users", {
    id: uuidv4(),
    address: data.address,
    dateOfBirth: data.dateOfBirth,
    firstName: data.firstName,
    lastName: data.lastName,
    isGraduate: data.isGraduate,
    phone: data.phone,
    school: data.school,
    gender: data.gender,
  });
  return post;
};

export const deleteUser = async (id) => {
  const response = await instance.delete(`users/${id}`);
  const data = response.data;
  return data;
};

export const putUser = async (id, data) => {
  const response = await instance.put(`users/${id}`, {
    id: uuidv4(),
    address: data.address,
    dateOfBirth: data.dateOfBirth,
    firstName: data.firstName,
    lastName: data.lastName,
    isGraduate: data.isGraduate,
    phone: data.phone,
    school: data.school,
    gender: data.gender,
  });
  return response;
};

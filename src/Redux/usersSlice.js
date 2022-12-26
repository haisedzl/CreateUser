import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usersService } from "../service/index";

export const usersSlice = createSlice({
  name: "users",
  initialState: { dataUsers: [], dataUser: {} },
  reducers: {
    // cái đ gì thế này ?
    // ko gọi service trong redux
  },
  extraReducers: (builder) => {
    builder.addCase(getDataUsers.fulfilled, (state, action) => {
      state.dataUsers = action.payload;
    });
  },
});

export const getDataUsers = createAsyncThunk("users/get", async () => {
  const response = await usersService.getUsers();
  const data = response;
  return data;
});

export const getDataUser = createAsyncThunk("user/get", async (id) => {
  const response = await usersService.getUser(id);
  return response;
});

import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../utils/axios';

export const registerUser = createAsyncThunk( 
    'user/signupUser',
    async (body, thunkAPI) => {
        try {
            const response = await axiosInstance.post(
                `/routes/signup`,
                body
            )

            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response.data || error.message);
        }
    }
)

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (body, thunkAPI) => {
        try {
            const response = await axiosInstance.post(
                `/routes/login`,
                body
            )

            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response.data || error.message);
        }
    }
)

export const authUser = createAsyncThunk(
    "user/authUser",
    async (_, thunkAPI) => {
        try {
            const response = await axiosInstance.get(
                `/routes/auth`
            );

            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response.data || error.message);
        }
    }
)

export const logoutUser = createAsyncThunk(
    "user/logoutUser",
    async (_, thunkAPI) => {
        try {
            const response = await axiosInstance.post(
                `/routes/logout`
            );

            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response.data || error.message);
        }
    }
)

//export const deleteUser = createAsyncThunk(...) -> 회원 탈퇴 기능이 가능하면 추가할 예정입니다!
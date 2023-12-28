import { createSlice } from '@reduxjs/toolkit';
import { authUser, loginUser, logoutUser, registerUser } from './thunkFunctions';
import { toast } from 'react-toastify';

const initialState = {
    userData: {
        id: '',
        email: '',
        name: '',
        role: 0,
        image: '',
    },
    isAuth: false,
    isLoading: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => { 
        builder
        //register
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.isLoading = false;
                toast.info('회원가입을 성공했습니다.');
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                toast.error(action.payload);
                state.error = action.payload;
            })
            
        //login
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userData = action.payload;
                state.isAuth = true;
                localStorage.setItem('accessToken', action.payload.accessToken);
                toast.info('로그인을 성공했습니다.');
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                toast.error(action.payload);
                state.error = action.payload;
            })

        //auth
            .addCase(authUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(authUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userData = action.payload;
                state.isAuth = true;
            })
            .addCase(authUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.userData = initialState.userData;
                state.isAuth = false;
                localStorage.removeItem('accessToken');
            })

        //logout
            .addCase(logoutUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userData = initialState.userData;
                state.isAuth = false;
                localStorage.removeItem('accessToken');
                toast.info('로그아웃을 성공했습니다.');
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.isLoading = false;
                toast.error("실패");
                state.error = "실패";
            })
    }
})

export default userSlice.reducer; //index.js에서 userReducer로 import하고, redux store를 생성
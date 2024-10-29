import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppCookies} from "../../components/Common/services/cookies";
import { toast } from 'react-toastify';
import apiClient from "../../utils/axios";

export interface AuthResponse {
    accessToken: string;
    accessTokenExpiresIn: string;
    refreshToken: string;
    refreshTokenExpiresIn: string;
    errorMessage?: string,
}

interface AuthState {
    accessToken: string | null;
    refreshToken: string | null;
    isLoggedIn: boolean;
    isLoading: boolean;
    errorMessage: string | null;
}

const initialState: AuthState = {
    accessToken: null,
    refreshToken: null,
    isLoggedIn: false,
    isLoading: false,
    errorMessage: null,
};


export const loginUserByUserName = createAsyncThunk('auth/loginUserByUserName',
    async ({username, password}: { username: string, password: string }, thunkAPI) => {
        try {
            const response = await apiClient.post<AuthResponse>('/auth/login', {
                 username, password
            });

            if (response.data.errorMessage) {
                return thunkAPI.rejectWithValue(response.data.errorMessage)
            }
            return response.data;
        } catch (error: any) {
            if (!error.response) {
                return thunkAPI.rejectWithValue('Network error. Please check your connection.');
            }
            return thunkAPI.rejectWithValue('Failed to login');
        }
    })

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        logout: (state) => {
            state.accessToken = null;
            state.refreshToken = null;
            state.isLoggedIn = false;
            state.errorMessage = null;
            AppCookies.deleteCookie('accessToken');
            AppCookies.deleteCookie('refreshToken');
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUserByUserName.pending, (state) => {
                state.isLoading = true;
                state.errorMessage = null;
            })
            .addCase(loginUserByUserName.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
                state.isLoading = false;
                state.accessToken = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;
                state.isLoggedIn = true;
                AppCookies.setCookies('accessToken', action.payload.accessToken, 1);
                AppCookies.setCookies('refreshToken', action.payload.refreshToken, 1);
                toast.success('Login successful!');
            })
            .addCase(loginUserByUserName.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.errorMessage = action.payload || 'Something went wrong';
                toast.error(state.errorMessage);
            });
    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;
import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    currentUser: null,
    isLoggedIn: true, // to be false
    error: false,
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true
      state.error = false
      state.currentUser = action.payload
    },
    logout(state) {
      state.isLoggedIn = false
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer

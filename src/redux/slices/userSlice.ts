import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: {data:{id:-1, token: ""}}
  },
  reducers: {
    setUser:(state, action) => {
        state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function

export const {setUser } = userSlice.actions

export default userSlice.reducer
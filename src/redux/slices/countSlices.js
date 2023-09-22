import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
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
export const { setUser } = counterSlice.actions

export default counterSlice.reducer


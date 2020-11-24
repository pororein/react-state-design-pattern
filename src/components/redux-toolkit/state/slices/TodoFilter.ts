import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TodoFilterState {
    filterEnabled: boolean
    filterModeDone: boolean
}

const initialState: TodoFilterState  = {
    filterEnabled: false,
    filterModeDone: false,
}

const todoFilterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
        filterSwitch: (state, action: PayloadAction<boolean>) => { 
            state.filterEnabled = action.payload },
        filterModeSwitch: (state, action: PayloadAction<boolean>) => { 
            state.filterModeDone = action.payload },
  }
})

export default todoFilterSlice;
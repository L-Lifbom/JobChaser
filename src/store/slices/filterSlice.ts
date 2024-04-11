import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface filterState {
    isActive: boolean
    city: string
}

const initialState: filterState = {
    isActive: false,
    city: "Stockholm"
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {


        
    },
  })


// Action creators are generated for each case reducer function
export const {} = filterSlice.actions

export default filterSlice.reducer
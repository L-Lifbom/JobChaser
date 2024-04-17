import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    isActive: false,
    city: "Stockholm"
};
export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {},
});
// Action creators are generated for each case reducer function
export const {} = filterSlice.actions;
export default filterSlice.reducer;

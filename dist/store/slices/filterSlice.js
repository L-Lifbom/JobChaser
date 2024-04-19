import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    heltid: false,
    deltid: false,
};
export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        toggleHeltid(state) {
            state.heltid = !state.heltid;
        },
        toggleDeltid(state) {
            state.deltid = !state.deltid;
        },
    },
});
export const { toggleHeltid, toggleDeltid } = filterSlice.actions;
export default filterSlice.reducer;

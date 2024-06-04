import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    schedules: [],
};

export const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {
        // addSchedule: (state, action) => {
        //     state.schedules.push(action.payload);
        // },
        addSchedule: (state, action) => {
            state.schedules = action.payload; // Gán mảng lịch trình từ payload vào state
        },
        removeSchedule: (state, action) => {
            state.schedules = state.schedules.filter(schedule => schedule.scheduleId !== action.payload.scheduleId);
        },
        updateSchedule: (state, action) => {
            const index = state.schedules.findIndex(schedule => schedule.scheduleId === action.payload.scheduleId);
            if (index !== -1) {
                state.schedules[index] = action.payload;
            }
        },
        resetSchedules: (state) => {
            state.schedules = [];
        },
    },
});

export const { addSchedule, removeSchedule, updateSchedule, resetSchedules } = scheduleSlice.actions;

export const selectSchedules = (state) => state.schedule.schedules;

export default scheduleSlice.reducer;

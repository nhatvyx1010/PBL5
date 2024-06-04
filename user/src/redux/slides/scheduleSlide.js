import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    scheduleId: '',
    userId: '',
    tripCode: '',
    departurePoint: '',
    arrivalPoint: '',
    startAt: '',
    arrivalAt: '',
    estimatedTravelTime: '',
    notes: '',
    photo: '',
    createdAt: '',
    updatedAt: '',
    trainId: '',
};

export const scheduleSlice = createSlice({
    name: 'scheduleOld',
    initialState,
    reducers: {
        updateSchedule: (state, action) => {
            const { scheduleId, userId, tripCode, departurePoint, arrivalPoint, startAt, arrivalAt, estimatedTravelTime, notes, photo, createdAt, updatedAt, trainId } = action.payload;
            return {
                ...state,
                scheduleId: scheduleId !== undefined ? scheduleId : state.scheduleId,
                userId: userId !== undefined ? userId : state.userId,
                tripCode: tripCode !== undefined ? tripCode : state.tripCode,
                departurePoint: departurePoint !== undefined ? departurePoint : state.departurePoint,
                arrivalPoint: arrivalPoint !== undefined ? arrivalPoint : state.arrivalPoint,
                startAt: startAt !== undefined ? startAt : state.startAt,
                arrivalAt: arrivalAt !== undefined ? arrivalAt : state.arrivalAt,
                estimatedTravelTime: estimatedTravelTime !== undefined ? estimatedTravelTime : state.estimatedTravelTime,
                notes: notes !== undefined ? notes : state.notes,
                photo: photo !== undefined ? photo : state.photo,
                createdAt: createdAt !== undefined ? createdAt : state.createdAt,
                updatedAt: updatedAt !== undefined ? updatedAt : state.updatedAt,
                trainId: trainId !== undefined ? trainId : state.trainId,
            };
        },
        resetSchedule: (state) => {
            return initialState;
        },
    },
});

export const { updateSchedule, resetSchedule } = scheduleSlice.actions;

export const selectSchedule = (state) => state.schedule;

export default scheduleSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//     departurePoint: '',
//     arrivalPoint: ''
// }
// export const findStationSlice = createSlice({
//     name: 'station',
//     initialState,
//     reducers: {
//         updateStation: (state, action) => {
//             const {departurePoint, arrivalPoint} = action.payload
//             state.departurePoint = departurePoint
//             state.arrivalPoint = arrivalPoint
//         },
//         resetStation: (state) => {
//             state.departurePoint = ''
//             state.arrivalPoint = ''
//         },
//     },
// })

// export const {updateStation, resetStation} = findStationSlice.actions

// export default findStationSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    returnAt: '',
    startAt: '',
    arrivalAt: '',
    start: '',
    arrival: ''
};
export const findStationSlice = createSlice({
    name: 'station',
    initialState,
    reducers: {
        updateStation: (state, action) => {
            const { returnAt, startAt, arrivalAt, start, arrival } = action.payload;

            const newState = {...state};

            if (returnAt !== undefined) {
                newState.returnAt = returnAt;
            }
            if (startAt !== undefined) {
                newState.startAt = startAt;
            }
            if (arrivalAt !== undefined) {
                newState.arrivalAt = arrivalAt;
            }
            if (start !== undefined) {
                newState.start = start;
            }

            if (arrival !== undefined) {
                newState.arrival = arrival;
            }

            // Trả về state mới
            return newState;
        },
        resetStation: (state) => {
            // Reset cả hai thuộc tính về giá trị mặc định
            state.returnAt = initialState.returnAt;
            state.startAt = initialState.startAt;
            state.arrivalAt = initialState.arrivalAt;
            state.start = initialState.start;
            state.arrival = initialState.arrival;
        },
    },
});

export const { updateStation, resetStation } = findStationSlice.actions;

export default findStationSlice.reducer;

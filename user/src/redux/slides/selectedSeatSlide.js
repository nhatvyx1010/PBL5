// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     seatSelections: {}, 
// };

// export const seatSelectionSlice = createSlice({
//     name: 'seatSelection',
//     initialState,
//     reducers: {
//         selectSeat: (state, action) => {
//             const { userID, scheduleId, seatNumber, carriageId } = action.payload;
//             if (!state.seatSelections[userID]) {
//                 state.seatSelections[userID] = {};
//             }
//             if (!state.seatSelections[userID][scheduleId]) {
//                 state.seatSelections[userID][scheduleId] = [];
//             }
//             const index = state.seatSelections[userID][scheduleId].findIndex(seat => seat.seatNumber === seatNumber && seat.carriageId === carriageId);
//             if (index === -1) {
//                 state.seatSelections[userID][scheduleId].push({ seatNumber, carriageId });
//             }
//         },
//         deselectSeat: (state, action) => {
//             const { userID, scheduleId, seatNumber, carriageId } = action.payload;
//             // Loại bỏ seat khỏi mảng nếu tồn tại
//             state.seatSelections[userID][scheduleId] = state.seatSelections[userID][scheduleId]?.filter(seat => !(seat.seatNumber === seatNumber && seat.carriageId === carriageId)) || [];
//         },
//         resetSeatSelection: (state, action) => {
//             const { userID } = action.payload;
//             // Đặt lại selectedSeats của userID về trạng thái ban đầu
//             state.seatSelections[userID] = {};
//         },
//     },
// });

// export const { selectSeat, deselectSeat, resetSeatSelection } = seatSelectionSlice.actions;

// export const selectSeatSelection = (state, userID) => state.seatSelection.seatSelections[userID] || {};

// export default seatSelectionSlice.reducer;
// ------------------------------------------------------------------------------------------------------------



import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedSeats: {},
};

export const seatSelectionSlice = createSlice({
    name: 'seatSelection',
    initialState,
    reducers: {
        selectSeat: (state, action) => {
            const { scheduleId, seatNumber, carriageId, trainName, carriageIndex } = action.payload;
            
            if (!state.selectedSeats) {
                state.selectedSeats = {};
            }
            if (!state.selectedSeats[scheduleId]) {
                state.selectedSeats[scheduleId] = [];
            }
            const index = state.selectedSeats[scheduleId].findIndex(seat => seat.seatNumber === seatNumber && seat.carriageId === carriageId);
            if (index === -1) {
                state.selectedSeats[scheduleId].push({ seatNumber, carriageId, trainName, carriageIndex });
            }
        },
        deselectSeat: (state, action) => {
            const { scheduleId, seatNumber, carriageId } = action.payload;
            // Loại bỏ seat khỏi mảng nếu tồn tại
            state.selectedSeats[scheduleId] = state.selectedSeats[scheduleId]?.filter(seat => !(seat.seatNumber === seatNumber && seat.carriageId === carriageId)) || [];
        },
        resetSeatSelection: (state) => {
            // Đặt lại selectedSeats về trạng thái ban đầu
            state.selectedSeats = {};
        },
    },
});

export const { selectSeat, deselectSeat, resetSeatSelection } = seatSelectionSlice.actions;

export const selectSeatSelection = (state) => state.seatSelection;

export default seatSelectionSlice.reducer;


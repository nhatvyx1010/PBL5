import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [],
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrder: (state, action) => {
            state.orders.push(action.payload);
        },
        removeOrder: (state, action) => {
            state.orders = state.orders.filter(order => order.scheduleId !== action.payload.scheduleId);
        },
        updateOrder: (state, action) => {
            const index = state.orders.findIndex(order => order.scheduleId === action.payload.scheduleId);
            if (index !== -1) {
                state.orders[index] = action.payload;
            }
        },
        resetOrders: (state) => {
            state.orders = [];
        },
    },
});

export const { addOrder, removeOrder, updateOrder, resetOrders } = orderSlice.actions;

export const selectOrders = (state) => state.order.orders;

export default orderSlice.reducer;

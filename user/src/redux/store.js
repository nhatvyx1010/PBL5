import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './slides/counterSlide'
import userReducer from './slides/userSlide'
import stationReducer from './slides/findStationSlide'
import scheduleReducer from './slides/schedulesSlide'
import orderReducer from './slides/ordersSlide'
import seatSelectionReducer from './slides/selectedSeatSlide'
// import dataScheduleReducer from './reducers/dataScheduleReducers';

const preloadedState = {
    user: JSON.parse(localStorage.getItem('user')) || {},
    station: JSON.parse(localStorage.getItem('station')) || {},
    schedule: JSON.parse(localStorage.getItem('schedule')) || {},
    order: JSON.parse(localStorage.getItem('order')) || {},
    seatSelection: JSON.parse(localStorage.getItem('seatSelection')) || {},
};

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        station: stationReducer,
        schedule: scheduleReducer,
        order: orderReducer,
        seatSelection: seatSelectionReducer,
        // dataSchedule: dataScheduleReducer,seatSelection
    },
    preloadedState,
});

store.subscribe(() => {
    localStorage.setItem('user', JSON.stringify(store.getState().user));
    localStorage.setItem('station', JSON.stringify(store.getState().station));
    localStorage.setItem('schedule', JSON.stringify(store.getState().schedule));
    localStorage.setItem('order', JSON.stringify(store.getState().schedule));
    localStorage.setItem('seatSelection', JSON.stringify(store.getState().seatSelection));
});

export default store;
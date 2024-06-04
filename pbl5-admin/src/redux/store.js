import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './slides/counterSlide'
import userReducer from './slides/userSlide'

const preloadedState = {
    user: JSON.parse(localStorage.getItem('user')) || {},
    // station: JSON.parse(localStorage.getItem('station')) || {},
};

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer
    },
    preloadedState,
});

store.subscribe(() => {
    localStorage.setItem('user', JSON.stringify(store.getState().user));
    // localStorage.setItem('station', JSON.stringify(store.getState().station));
});

export default store;